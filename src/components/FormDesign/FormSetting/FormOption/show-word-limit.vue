<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      显示字数统计
    </el-checkbox>
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
