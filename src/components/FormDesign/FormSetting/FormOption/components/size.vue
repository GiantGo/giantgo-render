<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)" size="mini">
    <el-radio-button label="medium">正常</el-radio-button>
    <el-radio-button label="small">小号</el-radio-button>
    <el-radio-button label="mini">迷你</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  name: 'sizeOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
