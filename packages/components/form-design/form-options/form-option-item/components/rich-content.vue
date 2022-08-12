<template>
  <el-input type="textarea" :model-value="modelValue" @input="$emit('update:modelValue', $event)" :rows="4"></el-input>
</template>

<script>
export default {
  name: 'richContentOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
