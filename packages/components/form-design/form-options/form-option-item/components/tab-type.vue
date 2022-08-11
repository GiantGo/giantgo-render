<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <el-radio-button label="card">选项卡</el-radio-button>
    <el-radio-button label="border-card">卡片化</el-radio-button>
  </el-radio-group>
</template>

<script>
import { ElRadioGroup, ElRadioButton } from 'element-plus'

export default {
  name: 'tabTypeOption',
  components: { ElRadioGroup, ElRadioButton },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
