<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <el-radio-button label="large">大号</el-radio-button>
    <el-radio-button label="default">正常</el-radio-button>
    <el-radio-button label="small">小号</el-radio-button>
  </el-radio-group>
</template>

<script setup>
defineOptions({
  name: 'sizeOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
