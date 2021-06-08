<template>
  <el-form-item label="最小值:">
    <el-input-number :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'minOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
