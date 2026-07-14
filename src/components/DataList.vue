<template>
  <div>
    <!-- Vuetify 1.5 data table: `hide-actions` + slot="items"/slot-scope (all changed in v3) -->
    <v-data-table :headers="headers" :items="members" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.role }}</td>
        <td class="text-xs-right">{{ props.item.salary | currency }}</td>
      </template>
    </v-data-table>

    <v-list class="mt-3">
      <v-list-tile v-for="u in members" :key="u.id" avatar>
        <v-list-tile-avatar color="primary">
          <span class="white--text">{{ initials(u.name) }}</span>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ u.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ u.role }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DataList',
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Role', value: 'role' },
        { text: 'Salary', value: 'salary', align: 'right' }
      ]
    }
  },
  computed: {
    // membersByName is lodash-sorted in the store.
    ...mapGetters({ members: 'membersByName' })
  },
  methods: {
    initials (name) {
      return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
    }
  }
}
</script>
