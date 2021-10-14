<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input-number
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
    ></el-input-number>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElInputNumber } from 'element-plus'

export default {
  name: 'numberRender',
  components: { ElFormItem, ElInputNumber },
  props: {
    path: String,
    modelValue: Number,
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
