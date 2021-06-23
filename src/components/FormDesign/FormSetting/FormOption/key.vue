<template>
  <el-form-item label="ID (字段名称/英文):">
    <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'keyOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
