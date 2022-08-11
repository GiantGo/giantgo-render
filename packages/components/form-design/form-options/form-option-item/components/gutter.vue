<template>
  <el-slider
    :model-value="modelValue"
    @update:modelValue="modelValue = $event"
    @input="$emit('update:modelValue', $event)"
    :min="0"
    :max="300"
  ></el-slider>
</template>

<script>
import { ElSlider } from 'element-plus'

export default {
  name: 'gutterOption',
  components: { ElSlider },
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
