<template>
  <el-radio-group :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <el-radio-button label="always">总是</el-radio-button>
    <el-radio-button label="hover">悬浮</el-radio-button>
    <el-radio-button label="never">从不</el-radio-button>
  </el-radio-group>
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
