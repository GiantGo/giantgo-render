<template>
  <el-form-item label="风格类型:">
    <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" size="small">
      <el-radio-button label="card">左对齐</el-radio-button>
      <el-radio-button label="border-card">右对齐</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'tabTypeOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
