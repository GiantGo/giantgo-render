<template>
  <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)"></el-input>
</template>

<script>
export default {
  name: 'prefixIconOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
