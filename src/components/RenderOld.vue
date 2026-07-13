<script>
export default {
  name: 'RenderOld',
  props: {
    text: { type: String, default: 'hi' }
  },
  // In Vue 3, h is imported from 'vue', not received as a render argument
  render (h) {
    return h('div', { class: 'render-old' }, this.text)
  }
}
</script>
