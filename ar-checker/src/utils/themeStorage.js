export const THEME_STORAGE_KEY = 'ar-checker-theme-mode'
export const COOKIE_CONSENT_KEY = 'ar-checker-cookie-consent'
export const THEME_COOKIE_NAME = 'ar-checker-theme'
const COOKIE_MAX_AGE_SEC = 365 * 24 * 60 * 60

/** @typedef {'system' | 'light' | 'dark'} ThemeMode */

/** @param {string} mode */
export function isValidThemeMode(mode) {
  return mode === 'system' || mode === 'light' || mode === 'dark'
}

/** @returns {ThemeMode} */
export function readStoredThemeMode() {
  const raw = localStorage.getItem(THEME_STORAGE_KEY)
  return isValidThemeMode(raw) ? raw : 'system'
}

/** @param {ThemeMode} mode */
export function writeStoredThemeMode(mode) {
  localStorage.setItem(THEME_STORAGE_KEY, mode)
}

/** @returns {'accepted' | null} */
export function readCookieConsent() {
  const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (raw === 'dismissed') {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    return null
  }
  return raw === 'accepted' ? 'accepted' : null
}

export function writeCookieConsent() {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
}

/** @param {ThemeMode} mode */
export function writeThemeCookie(mode) {
  document.cookie = `${THEME_COOKIE_NAME}=${encodeURIComponent(mode)}; path=/; max-age=${COOKIE_MAX_AGE_SEC}; SameSite=Lax`
}

/** @param {ThemeMode} mode */
export function syncThemeCookieIfConsented(mode) {
  if (readCookieConsent() === 'accepted') {
    writeThemeCookie(mode)
  }
}

/** @returns {boolean} */
export function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/** @param {ThemeMode} mode */
export function resolveIsDark(mode) {
  if (mode === 'dark') return true
  if (mode === 'light') return false
  return systemPrefersDark()
}

/** @param {boolean} isDark */
export function applyDarkClass(isDark) {
  document.documentElement.classList.toggle('dark', isDark)
}
