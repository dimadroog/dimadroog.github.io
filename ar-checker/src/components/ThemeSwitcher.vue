<template>
  <div
    class="inline-flex shrink-0 rounded-md border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-700 dark:bg-slate-800"
    role="group"
    aria-label="Тема оформления"
  >
    <button
      v-for="option in themeOptions"
      :key="option.value"
      type="button"
      class="rounded p-2 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-600"
      :class="
        mode === option.value
          ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-100'
          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
      "
      :aria-label="option.label"
      :aria-pressed="mode === option.value"
      :title="option.label"
      @click="setMode(option.value)"
    >
      <svg
        v-if="option.value === 'system'"
        class="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" fill="none" />
        <path d="M12 3a9 9 0 0 0 0 18V3z" stroke="none" />
      </svg>
      <svg
        v-else-if="option.value === 'dark'"
        class="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z"
        />
      </svg>
      <svg
        v-else-if="option.value === 'light'"
        class="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  </div>
</template>

<script>
import { useTheme } from '../composables/useTheme'

export default {
  name: 'ThemeSwitcher',
  setup() {
    const { mode, setMode, themeOptions } = useTheme()
    return { mode, setMode, themeOptions }
  },
}
</script>
