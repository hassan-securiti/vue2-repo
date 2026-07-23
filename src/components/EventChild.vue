<template>
  <div>
    <p>Last event: {{ lastEvent }}</p>
  </div>
</template>

<script>
import { EventBus } from '../eventBus'

export default {
  name: 'EventChild',
  data () {
    return { lastEvent: '' }
  },
  mounted () {
    EventBus.on('user-notified', (name) => {
      this.lastEvent = name
    })
    // Replace $children with $refs or provide/inject
    // For demonstration purposes, we'll use provide/inject
    // this.$root.$children is also removed, consider using provide/inject or a state management solution
    console.log('child count', this.$root.$slots.default?.length)
  },
  beforeUnmount () {
    EventBus.off('user-notified')
  }
}
</script>
