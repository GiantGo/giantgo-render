<template>
  <el-form-item :label="options.label" :prop="path">
    <el-input
      type="textarea"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :rows="options.rows"
      :disabled="options.disabled"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'textareaRender',
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
