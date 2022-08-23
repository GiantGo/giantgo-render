<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-slider
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :min="options.min"
      :max="options.max"
      :step="options.step"
      :show-stops="options.showStops"
      :show-input="options.showInput"
      :show-tooltip="options.showToolTip"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'sliderBuilder'
})
defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
