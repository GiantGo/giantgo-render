<template>
  <el-form-item label="显示已上传列表">
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"> </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'showFileListOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
