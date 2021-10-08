<template>
  <el-form-item label="文本域高度">
    <el-slider
      :model-value="modelValue"
      @update:modelValue="modelValue = $event"
      @change="$emit('update:modelValue', $event)"
      :min="2"
      :max="10"
    ></el-slider>
  </el-form-item>
</template>

<script>
export default {
  name: 'rowsOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
