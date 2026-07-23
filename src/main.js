import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'
import store from './store'

const vuetify = createVuetify({
  theme: {
    primary: '#1976D2',
    secondary: '#26A69A',
    accent: '#82B1FF',
    error: '#FF5252'
  }
})
const app = createApp(App)

// Vuetify 1.5 is configured via the plugin options (theme colors are top-level).
// In Vuetify 3 this becomes createVuetify({ theme: { themes: { light: { colors } } } }).

// Global filter — removed in Vue 3 (use methods / computed instead).
app.config.globalProperties.$filters = app.config.globalProperties.$filters || {}
app.config.globalProperties.$filters.currency = function (value) {
  return '$' + Number(value || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// Global property via prototype — in Vue 3 this becomes app.config.globalProperties.
app.config.globalProperties.$appName = 'Team Directory'

// Old bootstrap: new Vue(...).$mount — becomes createApp(...).mount in Vue 3.
app.use(vuetify)
app.use(router)
app.use(store)
app.mount('#app')
