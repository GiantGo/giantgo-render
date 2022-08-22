<template>
  <label
    :style="{
      'line-height': options.lineHeight
    }"
  >
    {{ options.content }}
  </label>
</template>

<script setup>
defineOptions({
  name: 'labelRender'
})
defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
