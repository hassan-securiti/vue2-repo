import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// Global filter — removed in Vue 3
Vue.filter('currency', function (value) {
  return '$' + Number(value).toFixed(2)
})

// Global property via prototype — changed in Vue 3 (config.globalProperties)
Vue.prototype.$appName = 'Mock App'

// Old bootstrap: new Vue(...) — becomes createApp(...) in Vue 3
new Vue({
  vuetify: new Vuetify({
    // Vuetify 1.5 theme shape — colors are top-level; in v3 they live under themes.light.colors
    theme: {
      primary: '#1976D2',
      secondary: '#424242',
      accent: '#82B1FF'
    }
  }),
  render: h => h(App)
}).$mount('#app')
