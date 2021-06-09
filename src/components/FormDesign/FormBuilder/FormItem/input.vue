<template>
  <el-form-item :label="options.label">
    <el-input
      type="text"
      :model-value="options.defaultValue"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :size="options.size"
      :prefix-icon="options.prefixIcon"
      :suffix-icon="options.suffixIcon"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'inputBuilder',
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
