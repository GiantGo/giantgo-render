<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <el-radio-button label="top">上</el-radio-button>
    <el-radio-button label="right">右</el-radio-button>
    <el-radio-button label="bottom">下</el-radio-button>
    <el-radio-button label="left">左</el-radio-button>
  </el-radio-group>
</template>

<script setup>
defineOptions({
  name: 'tabPositionOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
