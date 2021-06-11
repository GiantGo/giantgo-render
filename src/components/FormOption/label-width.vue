<template>
  <el-form-item :label="'标签宽度（' + modelValue + '）:'">
    <el-slider
      :model-value="parseInt(modelValue)"
      @update:modelValue="$emit('update:modelValue', $event + 'px')"
      :min="50"
      :max="300"
    ></el-slider>
  </el-form-item>
</template>

<script>
export default {
  name: 'labelWidthOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
