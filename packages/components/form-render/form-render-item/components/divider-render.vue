<template>
  <el-divider></el-divider>
</template>

<script setup>
defineOptions({
  name: 'dividerRender'
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
