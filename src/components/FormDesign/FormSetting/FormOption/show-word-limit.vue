<template>
  <el-form-item label="显示字数统计">
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"> </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'showWordLimitOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
