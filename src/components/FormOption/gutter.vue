<template>
  <el-form-item label="行内间距:">
    <el-slider
      :model-value="modelValue"
      @update:modelValue="modelValue = $event"
      @change="$emit('update:modelValue', $event)"
      :min="0"
      :max="300"
    ></el-slider>
  </el-form-item>
</template>

<script>
export default {
  name: 'gutterOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
