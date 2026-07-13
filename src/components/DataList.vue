<template>
  <div>
    <v-data-table :headers="headers" :items="items" hide-actions>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.role }}</td>
      </template>
    </v-data-table>

    <v-list>
      <v-list-tile v-for="u in items" :key="u.name" avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ u.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'DataList',
  data () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Role', value: 'role' }
      ],
      items: [
        { name: 'Ada', role: 'Engineer' },
        { name: 'Grace', role: 'Admiral' }
      ]
    }
  }
}
</script>
