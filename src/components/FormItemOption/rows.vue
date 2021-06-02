<template>
  <el-form-item label="文本域高度:">
    <el-slider :model-value="modelValue" @input="input" :min="2" :max="10"></el-slider>
  </el-form-item>
</template>

<script>
export default {
  name: 'rowsOption',
  components: {},
  props: {
    modelValue: Number
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
