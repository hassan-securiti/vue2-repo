import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import About from '../views/About.vue'

// vue-router 3 API — installed as a plugin. In Vue 3 this becomes createRouter().
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/team', name: 'team', component: Team },
    { path: '/about', name: 'about', component: About }
  ]
})
