import { ref } from 'vue'
import {
  readCookieConsent,
  readStoredThemeMode,
  writeCookieConsent,
  writeThemeCookie,
} from '../utils/themeStorage'

export function useCookieNotice() {
  const visible = ref(readCookieConsent() !== 'accepted')

  function dismiss() {
    visible.value = false
  }

  function accept() {
    writeCookieConsent()
    writeThemeCookie(readStoredThemeMode())
    visible.value = false
  }

  return {
    visible,
    dismiss,
    accept,
  }
}
