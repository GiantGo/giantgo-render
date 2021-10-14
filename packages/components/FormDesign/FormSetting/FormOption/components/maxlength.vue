<template>
  <el-input-number
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event ? $event : undefined)"
    size="small"
  ></el-input-number>
</template>

<script>
import { ElInputNumber } from 'element-plus'

export default {
  name: 'maxlengthOption',
  components: { ElInputNumber },
  props: {
    modelValue: Number
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
