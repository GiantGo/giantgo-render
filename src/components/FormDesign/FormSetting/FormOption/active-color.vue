<template>
  <el-form-item label="打开时背景色：">
    <el-color-picker :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-color-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'activeColorOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
