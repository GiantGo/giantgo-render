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

<script>
import { ElFormItem, ElSlider } from 'element-plus'

export default {
  name: 'sliderRender',
  components: { ElFormItem, ElSlider },
  props: {
    path: String,
    modelValue: Number,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
