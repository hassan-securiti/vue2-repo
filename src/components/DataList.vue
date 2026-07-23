<template>
  <div>
    <!-- Vuetify 1.5 data table: `hide-actions` + slot="items"/slot-scope (all changed in v3) -->
    <v-data-table :headers="headers" :items="members" hide-actions class="elevation-1">
      <template v-slot:items="props" >
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.role }}</td>
        <td class="text-xs-right">{{ $filters.currency(props.item.salary) }}</td>
      </template>
    </v-data-table>

    <v-list class="mt-3">
      <v-list-item v-for="u in members" :key="u.id" avatar>
        <v-list-item-avatar color="primary">
          <span class="white--text">{{ initials(u.name) }}</span>
        </v-list-item-avatar>
        <template>
          <v-list-item-title>{{ u.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ u.role }}</v-list-item-subtitle>
        </template>
      </v-list-item>
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
