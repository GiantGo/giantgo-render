<template>
  <el-form-item label="对齐方式">
    <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" size="mini">
      <el-radio-button label="left">左</el-radio-button>
      <el-radio-button label="right">右</el-radio-button>
      <el-radio-button label="top">顶部</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'labelPositionOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped>
.form-item {
  margin-bottom: 22px;
  .form-item-label {
    font-size: 14px;
    color: #606266;
    padding: 0 0 10px;
  }
}
</style>
