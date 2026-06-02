import { computed, onMounted, onUnmounted, ref } from 'vue'
import {
  applyDarkClass,
  readStoredThemeMode,
  resolveIsDark,
  syncThemeCookieIfConsented,
  writeStoredThemeMode,
} from '../utils/themeStorage'

/** @typedef {'system' | 'light' | 'dark'} ThemeMode */

export const THEME_OPTIONS = [
  { value: 'system', label: 'Системная' },
  { value: 'dark', label: 'Тёмная' },
  { value: 'light', label: 'Светлая' },
]

/** @param {ThemeMode} mode */
function applyMode(mode) {
  applyDarkClass(resolveIsDark(mode))
}

/** Синхронное применение до монтирования Vue (без вспышки). */
export function initTheme() {
  applyMode(readStoredThemeMode())
}

export function useTheme() {
  const mode = ref(readStoredThemeMode())
  let mediaQuery = null

  const isDark = computed(() => resolveIsDark(mode.value))

  /** @param {ThemeMode} next */
  function setMode(next) {
    mode.value = next
    writeStoredThemeMode(next)
    applyMode(next)
    syncThemeCookieIfConsented(next)
  }

  function onSystemChange() {
    if (mode.value === 'system') {
      applyMode('system')
    }
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', onSystemChange)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', onSystemChange)
  })

  return {
    mode,
    isDark,
    setMode,
    themeOptions: THEME_OPTIONS,
  }
}
