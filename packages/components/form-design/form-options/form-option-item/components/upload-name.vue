<template>
  <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)"></el-input>
</template>

<script setup>
defineOptions({
  name: 'uploadNameOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
