<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      显示已上传文件列表
    </el-checkbox>
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
