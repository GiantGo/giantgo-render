<template>
  <el-select
    multiple
    clearable
    filterable
    allow-create
    default-first-option
    placeholder="请选择图片类型"
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event)"
    style="width: 88%"
  >
    <el-option label="jpg" value="jpg" />
    <el-option label="jpeg" value="jpeg" />
    <el-option label="png" value="png" />
    <el-option label="gif" value="gif" />
  </el-select>
</template>

<script>
import { ElSelect } from 'element-plus'

export default {
  name: 'imageSuffixOption',
  components: { ElSelect },
  props: {
    modelValue: Array
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
