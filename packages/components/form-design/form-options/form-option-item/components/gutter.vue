<template>
  <el-slider
    :model-value="modelValue"
    @update:modelValue="modelValue = $event"
    @input="$emit('update:modelValue', $event)"
    :min="0"
    :max="300"
  ></el-slider>
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
