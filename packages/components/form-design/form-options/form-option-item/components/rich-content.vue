<template>
  <el-input type="textarea" :model-value="modelValue" :rows="4" @input="$emit('update:modelValue', $event)" />
</template>

<script setup>
defineOptions({
  name: 'richContentOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
