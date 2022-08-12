<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    @update:modelValue="modelValue = $event + 'px'"
    @input="$emit('update:modelValue', $event + 'px')"
    :min="0"
    :max="300"
    :format-tooltip="
      (value) => {
        return value + 'px'
      }
    "
  ></el-slider>
</template>

<script setup>
defineOptions({
  name: 'labelWidthOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
