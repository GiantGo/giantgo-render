<template>
  <el-form-item label="对齐方式:">
    <el-radio-group :model-value="modelValue" @update:modelValue="input" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
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
  setup(props, { emit }) {
    const input = (value) => {
      emit('update:modelValue', value)
    }

    return { input }
  }
}
</script>

<style lang="scss" scoped></style>
