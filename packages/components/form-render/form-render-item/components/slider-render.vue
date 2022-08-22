<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-slider
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
      :min="options.min"
      :max="options.max"
      :step="options.step"
      :show-stops="options.showStops"
      :show-input="options.showInput"
      :show-tooltip="options.showToolTip"
    ></el-slider>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'sliderRender'
})
defineProps({
  path: String,
  modelValue: Number,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
