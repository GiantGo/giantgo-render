<template>
  <el-select
    multiple
    clearable
    filterable
    allow-create
    default-first-option
    placeholder="请选择图片类型"
    :model-value="modelValue"
    style="width: 88%"
    @change="$emit('update:modelValue', $event)"
  >
    <el-option label="jpg" value="jpg" />
    <el-option label="jpeg" value="jpeg" />
    <el-option label="png" value="png" />
    <el-option label="gif" value="gif" />
  </el-select>
</template>

<script setup>
defineOptions({
  name: 'imageSuffixOption'
})
defineProps({
  modelValue: Array
})
</script>

<style lang="scss" scoped></style>
