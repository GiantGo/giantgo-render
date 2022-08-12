<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    @update:modelValue="modelValue = $event + '%'"
    @input="$emit('update:modelValue', $event + '%')"
    :min="0"
    :max="100"
    :marks="{ 33: '1/3', 50: '1/2', 66: '2/3' }"
  ></el-slider>
</template>

<script setup>
defineOptions({
  name: 'widthOption'
})
defineProps({
  modelValue: String
})
</script>

<style lang="scss" scoped></style>
