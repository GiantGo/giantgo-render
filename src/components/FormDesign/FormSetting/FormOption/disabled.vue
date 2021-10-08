<template>
  <el-form-item label="禁用">
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"> </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'disabledOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
