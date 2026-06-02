import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import {
  findClosestRatio,
  scaleToFit,
} from '../utils/aspectRatio'

const PREVIEW_MAX = 320
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']

function parsePositive(value) {
  const n = Number.parseFloat(String(value).replace(',', '.'))
  return Number.isFinite(n) && n > 0 ? n : null
}

/**
 * @param {File} file
 * @returns {Promise<{ width: number, height: number, url: string }>}
 */
function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        url,
      })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Не удалось прочитать изображение'))
    }
    img.src = url
  })
}

export function useAspectChecker() {
  const widthInput = ref('')
  const heightInput = ref('')
  const imageUrl = ref(null)
  const imageFileName = ref('')
  const dragActive = ref(false)
  const loadError = ref('')

  let previousObjectUrl = null
  let syncingDimensionsFromImage = false

  function revokePreviousUrl() {
    if (previousObjectUrl) {
      URL.revokeObjectURL(previousObjectUrl)
      previousObjectUrl = null
    }
  }

  const width = computed(() => parsePositive(widthInput.value))
  const height = computed(() => parsePositive(heightInput.value))
  const hasDimensions = computed(() => width.value !== null && height.value !== null)

  const closestRatio = computed(() => {
    if (!hasDimensions.value) return null
    return findClosestRatio(width.value, height.value)
  })

  const previewLayout = computed(() => {
    if (!hasDimensions.value || !closestRatio.value) {
      return null
    }

    const w = width.value
    const h = height.value
    const actual = scaleToFit(w, h, PREVIEW_MAX)
    const matchW = actual.width
    const matchH = Math.round((matchW * closestRatio.value.h) / closestRatio.value.w)
    const stageHeight = Math.max(actual.height, matchH)
    const actualArea = actual.width * actual.height
    const matchedArea = matchW * matchH
    const frontLayer = actualArea <= matchedArea ? 'actual' : 'matched'

    return {
      stageWidth: matchW,
      stageHeight,
      frontLayer,
      actual: {
        width: actual.width,
        height: actual.height,
      },
      matched: {
        width: matchW,
        height: matchH,
      },
      dimensionsLabel: `${w} × ${h}`,
    }
  })

  async function applyImageFile(file) {
    loadError.value = ''
    if (!file || !ACCEPTED_TYPES.includes(file.type)) {
      loadError.value = 'Поддерживаются JPEG, PNG, GIF, WebP и SVG'
      return
    }

    try {
      const { width: w, height: h, url } = await loadImageFromFile(file)
      revokePreviousUrl()
      previousObjectUrl = url
      imageUrl.value = url
      imageFileName.value = file.name
      syncingDimensionsFromImage = true
      widthInput.value = String(w)
      heightInput.value = String(h)
      await nextTick()
      syncingDimensionsFromImage = false
    } catch {
      loadError.value = 'Не удалось загрузить изображение'
    }
  }

  function onFileChange(event) {
    const file = event.target.files?.[0]
    if (file) applyImageFile(file)
    event.target.value = ''
  }

  function onDrop(event) {
    event.preventDefault()
    dragActive.value = false
    const file = event.dataTransfer?.files?.[0]
    if (file) applyImageFile(file)
  }

  function onDragOver(event) {
    event.preventDefault()
    dragActive.value = true
  }

  function onDragLeave() {
    dragActive.value = false
  }

  function clearImage() {
    revokePreviousUrl()
    imageUrl.value = null
    imageFileName.value = ''
    loadError.value = ''
  }

  watch([widthInput, heightInput], () => {
    loadError.value = ''
    if (syncingDimensionsFromImage || !imageUrl.value) return
    clearImage()
  })

  onUnmounted(() => {
    revokePreviousUrl()
  })

  return {
    widthInput,
    heightInput,
    imageUrl,
    imageFileName,
    dragActive,
    loadError,
    hasDimensions,
    closestRatio,
    previewLayout,
    onFileChange,
    onDrop,
    onDragOver,
    onDragLeave,
    clearImage,
  }
}
