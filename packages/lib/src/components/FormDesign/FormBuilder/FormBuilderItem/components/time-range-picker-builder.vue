<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-time-picker
      v-if="!options.hidden"
      is-range
      :model-value="options.defaultValue"
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
import { ElFormItem, ElTimePicker } from 'element-plus'

export default {
  name: 'timeRangePickerBuilder',
  components: { ElFormItem, ElTimePicker },
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
