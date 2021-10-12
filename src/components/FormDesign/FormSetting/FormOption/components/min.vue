<template>
  <el-input-number
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event)"
    size="small"
  ></el-input-number>
</template>

<script>
import { ElInputNumber } from 'element-plus'

export default {
  name: 'minOption',
  components: { ElInputNumber },
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
