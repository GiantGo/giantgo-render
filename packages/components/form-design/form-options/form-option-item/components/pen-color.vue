<template>
  <el-color-picker :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-color-picker>
</template>

<script>
export default {
  name: 'penColorOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
