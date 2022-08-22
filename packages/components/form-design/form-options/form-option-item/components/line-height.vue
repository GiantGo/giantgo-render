<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    @update:modelValue="modelValue = $event + 'px'"
    @input="$emit('update:modelValue', $event + 'px')"
    :min="12"
    :max="200"
    :format-tooltip="
      (value) => {
        return value + 'px'
      }
    "
  ></el-slider>
</template>

<script setup>
defineOptions({
  name: 'lineHeightOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
