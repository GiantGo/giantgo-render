<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      透明度选择
    </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'showAlphaOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
