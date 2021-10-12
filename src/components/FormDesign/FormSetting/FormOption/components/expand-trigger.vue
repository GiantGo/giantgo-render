<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" size="mini">
    <el-radio-button label="click">点击</el-radio-button>
    <el-radio-button label="hover">悬浮</el-radio-button>
  </el-radio-group>
</template>

<script>
import { ElRadioGroup, ElRadioButton } from 'element-plus'

export default {
  name: 'expandTriggerOption',
  components: { ElRadioGroup, ElRadioButton },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
