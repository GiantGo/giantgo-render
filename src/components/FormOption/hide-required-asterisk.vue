<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      隐藏必选标记
    </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'hideRequiredAsteriskOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
