<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-time-picker
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :format="options.format"
      :prefix-icon="options.prefixIcon"
    >
    </el-time-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'timePickerRender',
  components: {},
  props: {
    path: String,
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
