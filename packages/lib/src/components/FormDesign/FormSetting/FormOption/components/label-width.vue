<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    @update:modelValue="modelValue = $event + 'px'"
    @change="$emit('update:modelValue', $event + 'px')"
    :min="0"
    :max="300"
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
  name: 'labelWidthOption',
  components: { ElSlider },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
