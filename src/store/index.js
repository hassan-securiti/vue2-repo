import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import orderBy from 'lodash/orderBy'

// Vuex 3 API — installed as a plugin. In Vue 3 this becomes createStore().
Vue.use(Vuex)

// Seed data so the app renders offline; fetchMembers() tops it up from a public API.
const seed = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer', salary: 92000 },
  { id: 2, name: 'Grace Hopper', role: 'Admiral', salary: 88000 },
  { id: 3, name: 'Katherine Johnson', role: 'Mathematician', salary: 81000 }
]

export default new Vuex.Store({
  state: {
    members: seed.slice(),
    loading: false
  },
  getters: {
    // lodash orderBy — members sorted by name for stable display.
    membersByName: (state) => orderBy(state.members, ['name'], ['asc']),
    headcount: (state) => state.members.length,
    payroll: (state) => state.members.reduce((sum, m) => sum + (m.salary || 0), 0)
  },
  mutations: {
    ADD_MEMBER (state, member) {
      const id = state.members.length ? Math.max(...state.members.map(m => m.id)) + 1 : 1
      state.members.push({ id, salary: 0, ...member })
    },
    SET_LOADING (state, value) {
      state.loading = value
    },
    MERGE_MEMBERS (state, list) {
      const existing = new Set(state.members.map(m => m.name))
      list.forEach(m => { if (!existing.has(m.name)) state.members.push(m) })
    }
  },
  actions: {
    // Real axios call, with a graceful fallback so the app still works offline.
    async fetchMembers ({ commit }) {
      commit('SET_LOADING', true)
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const mapped = res.data.slice(0, 3).map((u, i) => ({
          id: 100 + i,
          name: u.name,
          role: (u.company && u.company.bs) || 'Team member',
          salary: 60000 + i * 5000
        }))
        commit('MERGE_MEMBERS', mapped)
      } catch (e) {
        // Offline / API down — keep the seeded members.
        console.warn('fetchMembers failed, using seed data:', e.message)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
})
