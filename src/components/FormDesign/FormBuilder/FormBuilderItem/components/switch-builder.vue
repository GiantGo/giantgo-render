<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-switch
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :active-text="options.activeText"
      :inactive-text="options.inactiveText"
      :active-color="options.activeColor"
      :inactive-color="options.inactiveColor"
    ></el-switch>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElSwitch } from 'element-plus'

export default {
  name: 'switchBuilder',
  components: { ElFormItem, ElSwitch },
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
