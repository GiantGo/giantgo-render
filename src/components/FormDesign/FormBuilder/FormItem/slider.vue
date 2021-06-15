<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-slider
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
export default {
  name: 'sliderBuilder',
  components: {},
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
