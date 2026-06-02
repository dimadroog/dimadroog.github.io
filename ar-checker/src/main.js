import { createApp } from 'vue'
import './assets/tailwind.css'
import { initTheme } from './composables/useTheme'
import App from './App.vue'

initTheme()
createApp(App).mount('#app')
