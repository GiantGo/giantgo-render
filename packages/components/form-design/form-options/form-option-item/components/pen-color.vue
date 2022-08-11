<template>
  <el-color-picker :model-value="modelValue" @change="$emit('update:modelValue', $event)"></el-color-picker>
</template>

<script>
import { ElColorPicker } from 'element-plus'

export default {
  name: 'penColorOption',
  components: { ElColorPicker },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
