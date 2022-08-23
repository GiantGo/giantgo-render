<template>
  <div v-html="options.richContent" />
</template>

<script setup>
defineOptions({
  name: 'htmlBuilder'
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
