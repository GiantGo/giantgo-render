<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-color-picker
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :show-alpha="options.showAlpha"
    ></el-color-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'colorPickerBuilder',
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
