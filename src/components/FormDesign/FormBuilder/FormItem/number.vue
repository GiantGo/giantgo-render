<template>
  <el-form-item :label="options.label">
    <el-input-number
      :model-value="options.defaultValue"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'numberBuilder',
  components: {},
  props: {
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
