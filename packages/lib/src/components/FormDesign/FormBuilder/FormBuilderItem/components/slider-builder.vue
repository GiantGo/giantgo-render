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
    ></el-slider>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElSlider } from 'element-plus'

export default {
  name: 'sliderBuilder',
  components: { ElFormItem, ElSlider },
  props: {
    path: String,
    uuid: String,
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
