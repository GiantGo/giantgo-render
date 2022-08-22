<template>
  <el-slider
    :model-value="modelValue"
    @update:modelValue="modelValue = $event"
    @input="$emit('update:modelValue', $event)"
    :min="0"
    :max="300"
  ></el-slider>
</template>

<script setup>
defineOptions({
  name: 'gutterOption'
})
defineProps({
  modelValue: Number
})
</script>

<style lang="scss" scoped></style>
