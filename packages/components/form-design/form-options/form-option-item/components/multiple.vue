<template>
  <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"/>
</template>

<script setup>
defineOptions({
  name: 'multipleOption'
})
defineProps({
  modelValue: Boolean
})
</script>

<style lang="scss" scoped></style>
