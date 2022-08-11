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

<script>
import { ElSlider } from 'element-plus'

export default {
  name: 'lineHeightOption',
  components: { ElSlider },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
