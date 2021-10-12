<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-checkbox-group v-if="!options.hidden" :model-value="options.defaultValue" :disabled="options.disabled">
      <el-checkbox v-for="item in options.options.items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElCheckboxGroup, ElCheckbox } from 'element-plus'

export default {
  name: 'checkboxBuilder',
  components: { ElFormItem, ElCheckboxGroup, ElCheckbox },
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
