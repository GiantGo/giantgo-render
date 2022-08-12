<template>
  <el-input-number :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-input-number>
</template>

<script>
export default {
  name: 'multipleLimitOption',
  components: {},
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
