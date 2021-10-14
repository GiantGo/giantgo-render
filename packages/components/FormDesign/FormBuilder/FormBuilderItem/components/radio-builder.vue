<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-radio-group v-if="!options.hidden" :model-value="options.defaultValue" :disabled="options.disabled">
      <el-radio v-for="item in options.options.items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElRadioGroup, ElRadio } from 'element-plus'

export default {
  name: 'radioBuilder',
  components: { ElFormItem, ElRadioGroup, ElRadio },
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
