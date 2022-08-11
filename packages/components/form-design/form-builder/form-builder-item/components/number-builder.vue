<template>
  <el-form-item :prop="path" :label="options.label">
    <el-input-number
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
    ></el-input-number>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElInputNumber } from 'element-plus'

export default {
  name: 'numberBuilder',
  components: { ElFormItem, ElInputNumber },
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
