<template>
  <el-form-item label="标签:">
    <el-input type="text" :model-value="modelValue" @input="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'labelOption',
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
