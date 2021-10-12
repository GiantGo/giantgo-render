<template>
  <el-slider
    :model-value="modelValue"
    @update:modelValue="modelValue = $event"
    @change="$emit('update:modelValue', $event)"
    :min="2"
    :max="10"
  ></el-slider>
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
