<template>
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <header class="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div class="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold tracking-wide text-brand-700 dark:text-brand-400">
            AR Checker
          </p>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Определение ближайшей стандартной пропорции по размерам или изображению
          </p>
        </div>
        <ThemeSwitcher />
      </div>
    </header>

    <main class="container py-8 md:py-12">
      <h1 class="sr-only">Проверка соотношения сторон</h1>

      <div class="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <section
          class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          aria-labelledby="form-heading"
        >
          <h2 id="form-heading" class="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
            Параметры
          </h2>

          <form class="flex flex-1 flex-col gap-5" @submit.prevent>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="form-label" for="width">Ширина</label>
                <input
                  id="width"
                  v-model="widthInput"
                  class="form-control"
                  type="number"
                  min="1"
                  step="any"
                  inputmode="decimal"
                  placeholder="например, 1920"
                  :aria-invalid="widthInput && !hasDimensions ? 'true' : undefined"
                />
              </div>
              <div>
                <label class="form-label" for="height">Высота</label>
                <input
                  id="height"
                  v-model="heightInput"
                  class="form-control"
                  type="number"
                  min="1"
                  step="any"
                  inputmode="decimal"
                  placeholder="например, 1080"
                  :aria-invalid="heightInput && !hasDimensions ? 'true' : undefined"
                />
              </div>
            </div>

            <div class="flex min-h-0 flex-1 flex-col">
              <span id="upload-label" class="form-label">Изображение</span>
              <div
                class="relative flex min-h-[200px] flex-1 flex-col rounded-xl border-2 border-dashed transition-colors duration-200 ease-in-out"
                :class="
                  dragActive
                    ? 'border-brand-600 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/40'
                    : 'border-slate-300 bg-slate-50 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500'
                "
                role="group"
                aria-labelledby="upload-label"
                @dragover="onDragOver"
                @dragleave="onDragLeave"
                @drop="onDrop"
              >
                <input
                  id="file-input"
                  class="sr-only"
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
                  @change="onFileChange"
                />
                <label
                  for="file-input"
                  class="flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 px-6 py-10 text-center"
                >
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Перетащите изображение сюда
                  </span>
                  <span class="text-sm text-slate-500 dark:text-slate-400">или нажмите для выбора файла</span>
                  <span class="text-xs text-slate-400 dark:text-slate-500">
                    JPEG, PNG, GIF, WebP, SVG
                  </span>
                </label>
              </div>
              <p
                v-if="loadError"
                class="mt-2 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {{ loadError }}
              </p>
              <div
                v-if="imageFileName"
                class="mt-3 flex items-center justify-between gap-3 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <span class="truncate" :title="imageFileName">{{ imageFileName }}</span>
                <button
                  type="button"
                  class="shrink-0 text-sm font-medium text-brand-700 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:text-brand-400"
                  @click="clearImage"
                >
                  Убрать
                </button>
              </div>
            </div>
          </form>
        </section>

        <section
          class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          aria-labelledby="preview-heading"
        >
          <h2 id="preview-heading" class="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
            Превью
          </h2>

          <dl class="mb-6 grid shrink-0 grid-cols-2 gap-3 text-sm">
            <div class="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/80">
              <dt class="text-slate-500 dark:text-slate-400">Ширина</dt>
              <dd class="font-medium tabular-nums text-slate-900 dark:text-slate-100">
                {{ hasDimensions ? width : '—' }}
              </dd>
            </div>
            <div class="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/80">
              <dt class="text-slate-500 dark:text-slate-400">Высота</dt>
              <dd class="font-medium tabular-nums text-slate-900 dark:text-slate-100">
                {{ hasDimensions ? height : '—' }}
              </dd>
            </div>
            <div class="col-span-2 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/80">
              <dt class="text-slate-500 dark:text-slate-400">Соотношение (десятичное)</dt>
              <dd class="font-medium tabular-nums text-slate-900 dark:text-slate-100">
                {{ decimalRatio ?? '—' }}
              </dd>
            </div>
          </dl>

          <div class="flex min-h-0 flex-1 flex-col">
            <div
              v-if="!hasDimensions"
              class="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400"
            >
              Укажите ширину и высоту или загрузите изображение
            </div>

            <div v-else class="flex min-h-0 flex-1 flex-col">
            <ul class="mb-4 shrink-0 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
              <li class="flex items-center gap-2">
                <span
                  class="inline-block h-3 w-3 rounded-sm border-2 border-sky-600 bg-sky-400/50"
                  aria-hidden="true"
                />
                Ваши размеры
                <span class="tabular-nums text-slate-800 dark:text-slate-200">
                  ({{ previewLayout.dimensionsLabel }})
                </span>
              </li>
              <li v-if="closestRatio" class="flex items-center gap-2">
                <span
                  class="inline-block h-3 w-3 rounded-sm border-2 border-amber-600 bg-amber-400/50"
                  aria-hidden="true"
                />
                Ближайшая пропорция
                <span class="font-medium text-slate-800 dark:text-slate-200">{{ closestRatio.label }}</span>
              </li>
            </ul>

            <div
              class="mx-auto flex flex-1 items-center justify-center rounded-xl bg-slate-100 p-6 dark:bg-slate-800"
            >
              <div
                class="relative"
                :style="{
                  width: `${previewLayout.stageWidth}px`,
                  height: `${previewLayout.stageHeight}px`,
                }"
              >
                <div
                  v-if="closestRatio"
                  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-amber-600 bg-amber-400/45"
                  :style="{
                    width: `${previewLayout.matched.width}px`,
                    height: `${previewLayout.matched.height}px`,
                    zIndex: previewLayout.frontLayer === 'matched' ? 2 : 1,
                  }"
                  aria-hidden="true"
                />

                <div
                  class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-sm border-2 border-sky-600 bg-sky-400/45"
                  :style="{
                    width: `${previewLayout.actual.width}px`,
                    height: `${previewLayout.actual.height}px`,
                    zIndex: previewLayout.frontLayer === 'actual' ? 2 : 1,
                  }"
                >
                  <img
                    v-if="imageUrl"
                    :src="imageUrl"
                    alt="Загруженное изображение в ваших размерах"
                    class="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>

            <p
              v-if="closestRatio"
              class="mt-6 shrink-0 text-center text-base font-medium text-slate-900 dark:text-slate-100"
            >
              Для ваших размеров лучше всего подходит пропорция
              <span class="text-brand-700 dark:text-brand-400">{{ closestRatio.label }}</span>
            </p>
            </div>
          </div>
        </section>
      </div>

      <section
        class="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8"
        aria-labelledby="reference-heading"
      >
        <h2 id="reference-heading" class="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Справка
        </h2>

        <div class="mt-6 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          <div>
            <h3 class="mb-2 text-base font-semibold text-slate-800 dark:text-slate-200">
              Что такое пропорция сторон (aspect ratio)
            </h3>
            <p>
              Пропорция сторон — это соотношение <strong class="font-medium text-slate-800 dark:text-slate-200">ширины к высоте</strong>
              изображения или области, записанное как «W:H» (например, 16:9). Оно не зависит от пикселей:
              кадр 1920×1080 и 1280×720 имеют одну и ту же пропорцию 16:9. Чем больше первое число
              относительно второго, тем шире и «горизонтальнее» кадр; если высота доминирует — формат
              вертикальный.
            </p>
            <p class="mt-3">
              В AR Checker вы вводите размеры или загружаете файл — приложение сравнивает ваше
              соотношение с набором распространённых эталонов и показывает
              <strong class="font-medium text-slate-800 dark:text-slate-200">ближайший</strong> вариант. В превью голубой
              блок — ваши размеры, янтарный — эталонная пропорция; наложение помогает увидеть отличие.
            </p>
          </div>

          <div>
            <h3 class="mb-2 text-base font-semibold text-slate-800 dark:text-slate-200">
              Пропорции в этом приложении
            </h3>
            <p class="mb-4">
              Список ниже совпадает с эталонами в коде — при обновлении приложения он меняется
              автоматически. Всего
              <strong class="font-medium text-slate-800 dark:text-slate-200">{{ commonRatios.length }}</strong>
              вариантов.
            </p>

            <div class="grid gap-6 md:grid-cols-3">
              <div
                v-for="group in ratioReferenceGroups"
                :key="group.id"
                class="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50"
              >
                <h4 class="mb-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {{ group.title }}
                </h4>
                <ul class="space-y-3">
                  <li
                    v-for="ratio in group.items"
                    :key="ratio.label"
                    class="border-b border-slate-200/80 pb-3 last:border-0 last:pb-0 dark:border-slate-700/80"
                  >
                    <span class="font-medium tabular-nums text-brand-700 dark:text-brand-400">{{ ratio.label }}</span>
                    <span class="ml-2 text-xs text-slate-400 dark:text-slate-500">
                      (≈ {{ formatRatioDecimal(ratio) }})
                    </span>
                    <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">{{ ratio.hint }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-200 bg-white py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      <div class="container">AR Checker · {{ year }}</div>
    </footer>

    <CookieNotice />
  </div>
</template>

<script>
import { computed } from 'vue'
import CookieNotice from './components/CookieNotice.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import { useAspectChecker } from './composables/useAspectChecker'
import {
  COMMON_RATIOS,
  getRatioReferenceGroups,
} from './utils/aspectRatio'

function formatRatioDecimal(ratio) {
  return (ratio.w / ratio.h).toFixed(2)
}

export default {
  name: 'App',
  components: {
    ThemeSwitcher,
    CookieNotice,
  },
  setup() {
    const {
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
    } = useAspectChecker()

    const width = computed(() => {
      const n = Number.parseFloat(String(widthInput.value).replace(',', '.'))
      return Number.isFinite(n) && n > 0 ? n : null
    })

    const height = computed(() => {
      const n = Number.parseFloat(String(heightInput.value).replace(',', '.'))
      return Number.isFinite(n) && n > 0 ? n : null
    })

    const decimalRatio = computed(() => {
      if (!width.value || !height.value) return null
      return (width.value / height.value).toFixed(4)
    })

    const year = new Date().getFullYear()
    const ratioReferenceGroups = getRatioReferenceGroups()
    const commonRatios = COMMON_RATIOS

    return {
      ratioReferenceGroups,
      commonRatios,
      formatRatioDecimal,
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
      width,
      height,
      decimalRatio,
      year,
    }
  },
}
</script>
