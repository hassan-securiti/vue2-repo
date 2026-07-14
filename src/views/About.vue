<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 md8>
      <v-card class="pa-4">
        <h2 class="headline mb-2">About {{ $appName }}</h2>
        <p>
          A small team-directory application built with <strong>Vue 2.6</strong> and
          <strong>Vuetify 1.5</strong>. It uses vue-router for navigation, Vuex for state,
          axios to fetch members, and lodash / moment for data shaping and formatting.
        </p>
        <v-divider class="my-3"></v-divider>
        <v-list two-line>
          <v-list-tile v-for="item in facts" :key="item.label">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.label }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.value }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      facts: [
        { label: 'Framework', value: 'Vue 2.6' },
        { label: 'UI library', value: 'Vuetify 1.5' },
        { label: 'State', value: 'Vuex 3' },
        { label: 'Routing', value: 'vue-router 3' }
      ]
    }
  }
}
</script>
