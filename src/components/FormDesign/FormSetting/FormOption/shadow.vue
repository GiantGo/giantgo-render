<template>
  <el-form-item label="阴影显示：">
    <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" size="small">
      <el-radio-button label="always">总是显示</el-radio-button>
      <el-radio-button label="hover">悬浮显示</el-radio-button>
      <el-radio-button label="never">从不显示</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'shadowOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
