<template>
  <el-form-item label="文件字段名:">
    <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'uploadNameOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
