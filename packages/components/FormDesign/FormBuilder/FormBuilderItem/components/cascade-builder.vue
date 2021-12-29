<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :options="options.options.items"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :clearable="options.clearable"
      :props="{
        expandTrigger: options.expandTrigger
      }"
    ></el-cascader>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElCascader } from 'element-plus'

export default {
  name: 'cascaderBuilder',
  components: { ElFormItem, ElCascader },
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
