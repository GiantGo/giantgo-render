<template>
  <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"> </el-checkbox>
</template>

<script>
import { ElCheckbox } from 'element-plus'

export default {
  name: 'multipleOption',
  components: { ElCheckbox },
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
