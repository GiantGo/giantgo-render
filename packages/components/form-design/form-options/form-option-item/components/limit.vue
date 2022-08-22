<template>
  <el-input-number :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-input-number>
</template>

<script setup>
defineOptions({
  name: 'limitOption'
})
defineProps({
  modelValue: Number
})
</script>

<style lang="scss" scoped></style>
