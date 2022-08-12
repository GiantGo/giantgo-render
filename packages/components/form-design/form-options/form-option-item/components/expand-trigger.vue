<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <el-radio-button label="click">点击</el-radio-button>
    <el-radio-button label="hover">悬浮</el-radio-button>
  </el-radio-group>
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
