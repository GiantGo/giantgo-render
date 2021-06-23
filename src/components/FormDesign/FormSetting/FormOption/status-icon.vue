<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      显示校验结果反馈图标
    </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'statusIconOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
