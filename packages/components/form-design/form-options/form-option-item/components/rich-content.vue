<template>
  <el-input type="textarea" :model-value="modelValue" @input="$emit('update:modelValue', $event)" :rows="4"></el-input>
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
