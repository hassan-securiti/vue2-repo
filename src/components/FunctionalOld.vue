<template>
  <div class="pill">{{ label }}</div>
</template>

<script>
export default {
  name: 'FunctionalOld',
  props: {
    label: { type: String, default: '' }
  }
}
</script>
