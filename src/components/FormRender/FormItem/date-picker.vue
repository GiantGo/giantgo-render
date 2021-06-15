<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-date-picker
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :format="options.format"
      :prefix-icon="options.prefixIcon"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'datePickerRender',
  components: {},
  props: {
    path: String,
    uuid: String,
    modelValue: Date,
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
