<template>
  <el-form-item label="最大长度：">
    <el-input-number
      :model-value="modelValue"
      @change="$emit('update:modelValue', $event ? $event : undefined)"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'maxlengthOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
