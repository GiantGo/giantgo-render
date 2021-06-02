<template>
  <el-form-item label="标签宽度（px）:">
    <el-slider :model-value="parseInt(modelValue)" @update:modelValue="input" :min="50" :max="200"></el-slider>
  </el-form-item>
</template>

<script>
export default {
  name: 'labelWidthFormOption',
  components: {},
  props: {
    modelValue: String
  },
  setup(props, { emit }) {
    const input = (value) => {
      emit('update:modelValue', value + 'px')
    }

    return { input }
  }
}
</script>

<style lang="scss" scoped></style>
