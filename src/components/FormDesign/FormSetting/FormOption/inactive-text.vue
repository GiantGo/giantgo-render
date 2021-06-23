<template>
  <el-form-item label="关闭时文字描述:">
    <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'inactiveTextOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
