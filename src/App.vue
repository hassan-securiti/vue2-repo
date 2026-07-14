<template>
  <v-app>
    <!-- Vuetify 1.5 navigation drawer with v-list-tile items (renamed to v-list-item in v3) -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.to" :to="link.to" active-class="primary--text">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Vuetify 1.5 toolbar (becomes v-app-bar in v3) -->
    <v-toolbar app clipped-left color="primary" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $appName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip color="white" text-color="primary">{{ headcount }} people</v-chip>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app color="grey lighten-4">
      <span class="grey--text">{{ $appName }} — built with Vue 2 &amp; Vuetify 1.5</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      links: [
        { to: '/', label: 'Home', icon: 'dashboard' },
        { to: '/team', label: 'Team', icon: 'people' },
        { to: '/about', label: 'About', icon: 'info' }
      ]
    }
  },
  computed: {
    ...mapGetters(['headcount'])
  }
}
</script>
