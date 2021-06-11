<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      type="text"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :size="options.size"
      :prefix-icon="options.prefixIcon"
      :suffix-icon="options.suffixIcon"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'inputRender',
  components: {},
  props: {
    path: String,
    uuid: String,
    modelValue: String,
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
