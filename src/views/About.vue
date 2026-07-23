<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-card class="pa-4">
        <h2 class="headline mb-2">About {{ $appName }}</h2>
        <p>
          A small team-directory application built with <strong>Vue 2.6</strong> and
          <strong>Vuetify 1.5</strong>. It uses vue-router for navigation, Vuex for state,
          axios to fetch members, and lodash / moment for data shaping and formatting.
        </p>
        <v-divider class="my-3"></v-divider>
        <v-list lines="two">
          <v-list-item v-for="item in facts" :key="item.label">
            <template>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.value }}</v-list-item-subtitle>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
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
