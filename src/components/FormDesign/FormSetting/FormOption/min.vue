<template>
  <el-input-number
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event)"
    size="small"
  ></el-input-number>
</template>

<script>
export default {
  name: 'minOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
