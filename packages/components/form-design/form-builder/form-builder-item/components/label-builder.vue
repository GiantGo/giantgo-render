<template>
  <label>{{ options.content }}</label>
</template>

<script setup>
defineOptions({
  name: 'labelBuilder'
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
