<template>
  <el-color-picker :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-color-picker>
</template>

<script setup>
defineOptions({
  name: 'inactiveColorOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
