<template>
  <el-form-item :label="options.label" :prop="path">
    <el-input-number
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :min="options.min"
      :max="options.max"
      label="描述文字"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'numberRender',
  components: {},
  props: {
    path: String,
    uuid: String,
    modelValue: Number,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
