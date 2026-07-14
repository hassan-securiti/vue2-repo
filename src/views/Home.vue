<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <h1 class="display-1 mb-1">{{ title }}</h1>
        <p class="grey--text">Total payroll: <strong>{{ payroll | currency }}</strong></p>
      </v-flex>
      <v-flex xs12 md4>
        <!-- .sync modifier — becomes v-model:name in Vue 3 -->
        <UserCard :name.sync="featured" />
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-3">
      <v-flex xs12 sm4 v-for="stat in stats" :key="stat.label">
        <v-card class="pa-3 text-xs-center">
          <div class="headline primary--text">{{ stat.value }}</div>
          <div class="grey--text">{{ stat.label }}</div>
        </v-card>
      </v-flex>
    </v-layout>

    <div class="mt-4">
      <span class="subheading mr-2">Tags:</span>
      <!-- functional component, used repeatedly -->
      <FunctionalOld v-for="t in tags" :key="t" :label="t" />
    </div>

    <!-- render-function component (render(h) → import { h } in Vue 3) -->
    <RenderOld class="mt-3" text="Rendered via a render() function" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '../components/UserCard.vue'
import FunctionalOld from '../components/FunctionalOld.vue'
import RenderOld from '../components/RenderOld.vue'

export default {
  name: 'Home',
  components: { UserCard, FunctionalOld, RenderOld },
  data () {
    return {
      title: 'Team Directory',
      featured: 'Ada Lovelace',
      tags: ['engineering', 'leadership', 'research']
    }
  },
  computed: {
    ...mapGetters(['payroll', 'headcount']),
    stats () {
      return [
        { label: 'People', value: this.headcount },
        { label: 'Departments', value: 3 },
        { label: 'Open roles', value: 2 }
      ]
    }
  }
}
</script>
