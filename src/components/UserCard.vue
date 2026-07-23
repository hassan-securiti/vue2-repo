<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
    <v-text-field :model-value="name" label="Name" @input="$emit('update:name', $event)" />
    <v-btn variant="flat" @click="notify">Notify</v-btn>
    <v-btn rounded color="primary">Round</v-btn>
  </v-card>
</template>

<script>
import { EventBus } from '../eventBus'

export default {
  name: 'UserCard',
  props: {
    name: { type: String, default: '' }
  },
  methods: {
    notify () {
      EventBus.$emit('user-notified', this.name)
    }
  }
}
</script>
