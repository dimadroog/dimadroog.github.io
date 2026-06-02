<template>
  <div
    v-if="visible"
    class="pointer-events-none fixed bottom-2 right-2 z-50 flex justify-end sm:right-4 sm:bottom-4"
    role="region"
    aria-label="Уведомление о cookies"
  >
    <div
      class="pointer-events-auto flex max-w-sm items-start gap-2 rounded-lg border border-slate-200/90 bg-white/95 px-3 py-2 text-[11px] leading-snug text-slate-600 shadow-md backdrop-blur-sm dark:border-slate-700/90 dark:bg-slate-900/95 dark:text-slate-400 sm:max-w-md"
    >
      <p class="min-w-0 flex-1">
        Если хотите, сохраним выбранную цветовую схему в cookies — предпочтение сохранится
        для вашего следующего визита.
      </p>
      <button
        type="button"
        class="shrink-0 rounded px-2 py-0.5 font-medium text-brand-700 transition-colors duration-200 ease-in-out hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-950/50"
        @click="accept"
      >
        Сохранить
      </button>
      <button
        type="button"
        class="shrink-0 rounded p-0.5 text-slate-400 transition-colors duration-200 ease-in-out hover:text-slate-700 dark:hover:text-slate-200"
        aria-label="Закрыть без сохранения"
        @click="dismiss"
      >
        <span aria-hidden="true" class="block text-sm leading-none">×</span>
      </button>
    </div>
  </div>
</template>

<script>
import { useCookieNotice } from '../composables/useCookieNotice'

export default {
  name: 'CookieNotice',
  setup() {
    const { visible, dismiss, accept } = useCookieNotice()
    return { visible, dismiss, accept }
  },
}
</script>
