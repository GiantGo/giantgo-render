<template>
  <el-slider
    :model-value="modelValue"
    @update:modelValue="modelValue = $event"
    @input="$emit('update:modelValue', $event)"
    :min="2"
    :max="10"
  ></el-slider>
</template>

<script setup>
defineOptions({
  name: 'rowsOption'
})
defineProps({
  modelValue: Number
})
</script>

<style lang="scss" scoped></style>
