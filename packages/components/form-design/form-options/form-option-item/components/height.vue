<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    @update:modelValue="modelValue = $event + 'px'"
    @input="$emit('update:modelValue', $event + 'px')"
    :min="0"
    :max="1000"
    :format-tooltip="
      (value) => {
        return value + 'px'
      }
    "
  ></el-slider>
</template>

<script>
export default {
  name: 'heightOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
