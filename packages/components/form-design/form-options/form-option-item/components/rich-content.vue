<template>
  <el-input type="textarea" :model-value="modelValue" @input="$emit('update:modelValue', $event)" :rows="4"></el-input>
</template>

<script>
import { ElInput } from 'element-plus'

export default {
  name: 'richContentOption',
  components: { ElInput },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
