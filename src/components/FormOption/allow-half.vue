<template>
  <el-form-item>
    <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
      允许半选
    </el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: 'allowHalfOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
