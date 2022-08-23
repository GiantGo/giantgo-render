<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <object-builder :uuid="uuid" :items="items" :options="options" :path="path" />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'tableBuilder'
})
defineProps({
  path: String,
  uuid: String,
  items: {
    type: Array,
    default() {
      return []
    }
  },
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
