<template>
  <el-form-item label="最大值">
    <el-input-number
      :model-value="modelValue"
      @change="$emit('update:modelValue', $event)"
      size="small"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'maxOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
