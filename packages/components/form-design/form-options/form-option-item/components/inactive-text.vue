<template>
  <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)"></el-input>
</template>

<script>
import { ElInput } from 'element-plus'

export default {
  name: 'inactiveTextOption',
  components: { ElInput },
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
