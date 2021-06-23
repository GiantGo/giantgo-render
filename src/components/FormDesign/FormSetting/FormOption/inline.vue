<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      是否行内表单
    </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'inlineOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
