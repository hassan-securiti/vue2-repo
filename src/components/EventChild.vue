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
    // $on removed in Vue 3
    EventBus.$on('user-notified', (name) => {
      this.lastEvent = name
    })
    // $children removed in Vue 3
    const kids = this.$children
    console.log('child count', kids.length)
  },
  beforeDestroy () {
    EventBus.$off('user-notified')
  }
}
</script>
