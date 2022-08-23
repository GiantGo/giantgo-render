<template>
  <el-color-picker :model-value="modelValue" @change="$emit('update:modelValue', $event)"/>
</template>

<script setup>
defineOptions({
  name: 'backgroundColorOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
