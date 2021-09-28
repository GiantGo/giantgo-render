<template>
  <el-form-item label="触发子菜单方式：">
    <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" size="small">
      <el-radio-button label="click">点击</el-radio-button>
      <el-radio-button label="hover">悬浮</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'expandTriggerOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
