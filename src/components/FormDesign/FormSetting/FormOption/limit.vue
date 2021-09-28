<template>
  <el-form-item label="个数限制：">
    <el-input-number :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'limitOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
