<template functional>
  <div class="pill">{{ props.label }}</div>
</template>

<script>
export default {
  name: 'FunctionalOld',
  functional: true,
  props: {
    label: { type: String, default: '' }
  }
}
</script>
