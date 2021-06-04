<template>
  <el-form-item label="ID (字段名称/英文):">
    <el-input type="text" :model-value="modelValue" @input="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'keyOption',
  components: {},
  props: {
    modelValue: String
  },
  setup(props, { emit }) {
    const input = (value) => {
      emit('update:modelValue', value)
    }

    return { input }
  }
}
</script>

<style lang="scss" scoped></style>
