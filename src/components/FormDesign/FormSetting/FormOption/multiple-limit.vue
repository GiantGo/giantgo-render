<template>
  <el-form-item label="多选个数限制">
    <el-input-number
      :model-value="modelValue"
      @change="$emit('update:modelValue', $event)"
      size="small"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'multipleLimitOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
