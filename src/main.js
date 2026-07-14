import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify 1.5 is configured via the plugin options (theme colors are top-level).
// In Vuetify 3 this becomes createVuetify({ theme: { themes: { light: { colors } } } }).
Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#26A69A',
    accent: '#82B1FF',
    error: '#FF5252'
  }
})

Vue.config.productionTip = false

// Global filter — removed in Vue 3 (use methods / computed instead).
Vue.filter('currency', function (value) {
  return '$' + Number(value || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
})

// Global property via prototype — in Vue 3 this becomes app.config.globalProperties.
Vue.prototype.$appName = 'Team Directory'

// Old bootstrap: new Vue(...).$mount — becomes createApp(...).mount in Vue 3.
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
