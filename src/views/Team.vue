<template>
  <div>
    <v-row align="center" class="mb-2">
      <v-col><h2 class="headline">Team members</h2></v-col>
      <v-spacer></v-spacer>
      <v-col shrink>
        <v-btn variant="flat" color="primary" :loading="loading" @click="load">Refresh from API</v-btn>
      </v-col>
    </v-row>

    <DataList />

    <v-card class="pa-3 mt-4">
      <h3 class="subheading mb-2">Add a member</h3>
      <v-row>
        <v-col cols="12" sm="5" class="pr-2">
          <v-text-field v-model="form.name" label="Name"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="pr-2">
          <v-text-field v-model="form.role" label="Role"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn rounded color="primary" :disabled="!form.name" @click="add">Add</v-btn>
        </v-col>
      </v-row>
    </v-card>

    <EventChild class="mt-3" />
    <p class="grey--text mt-2">Last refreshed: {{ lastRefreshed }}</p>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState, mapActions, mapMutations } from 'vuex'
import DataList from '../components/DataList.vue'
import EventChild from '../components/EventChild.vue'

export default {
  name: 'Team',
  components: { DataList, EventChild },
  data () {
    return {
      form: { name: '', role: '' },
      refreshedAt: new Date()
    }
  },
  computed: {
    ...mapState(['loading']),
    lastRefreshed () {
      // moment formatting — a real dependency the app actually uses.
      return moment(this.refreshedAt).format('MMM D, YYYY h:mm:ss A')
    }
  },
  created () {
    this.load()
  },
  methods: {
    ...mapActions(['fetchMembers']),
    ...mapMutations(['ADD_MEMBER']),
    async load () {
      await this.fetchMembers()
      this.refreshedAt = new Date()
    },
    add () {
      this.ADD_MEMBER({ name: this.form.name, role: this.form.role || 'Team member' })
      this.form.name = ''
      this.form.role = ''
    }
  }
}
</script>
