<template>
  <el-form-item label="隐藏">
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"> </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'hiddenOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
