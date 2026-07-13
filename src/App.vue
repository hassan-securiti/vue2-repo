<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h1>{{ title }}</h1>
          <p>Price: {{ price | currency }}</p>
        </v-flex>
        <v-flex xs12 md6>
          <UserCard :name.sync="userName" />
        </v-flex>
      </v-layout>
      <DataList />
      <EventChild />
    </v-container>
  </v-app>
</template>

<script>
import UserCard from './components/UserCard.vue'
import DataList from './components/DataList.vue'
import EventChild from './components/EventChild.vue'

export default {
  name: 'App',
  components: { UserCard, DataList, EventChild },
  data () {
    return {
      title: 'Mock Migration App',
      price: 19.99,
      userName: 'Ada'
    }
  }
}
</script>
