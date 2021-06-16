<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      v-if="!options.hidden"
      type="text"
      :model-value="options.defaultValue"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :prefix-icon="options.prefixIcon"
      :suffix-icon="options.suffixIcon"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
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
