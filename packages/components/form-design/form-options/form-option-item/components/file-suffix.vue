<template>
  <el-select
    multiple
    clearable
    filterable
    allow-create
    default-first-option
    placeholder="请选择文件类型"
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event)"
    style="width: 88%"
  >
    <el-option label="doc" value="doc" />
    <el-option label="docx" value="docx" />
    <el-option label="xls" value="xls" />
    <el-option label="xlsx" value="xlsx" />
    <el-option label="rar" value="rar" />
    <el-option label="zip" value="zip" />
  </el-select>
</template>

<script>
import { ElSelect } from 'element-plus'

export default {
  name: 'fileSuffixOption',
  components: { ElSelect },
  props: {
    modelValue: Array
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
