<template>
  <el-form-item :label="options.label" :prop="path">
    <el-input
      type="text"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'inputRender',
  components: {},
  props: {
    path: String,
    modelValue: String,
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
