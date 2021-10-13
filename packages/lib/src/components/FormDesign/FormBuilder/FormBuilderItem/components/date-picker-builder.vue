<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-date-picker
      v-if="!options.hidden"
      :model-value="options.defaultValue"
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
import { ElFormItem, ElDatePicker } from 'element-plus'

export default {
  name: 'datePickerBuilder',
  components: { ElFormItem, ElDatePicker },
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
