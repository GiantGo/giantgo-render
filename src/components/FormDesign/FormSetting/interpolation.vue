<template>
  <el-input
    type="text"
    :model-value="getInterpolation(modelValue).trim()"
    @input="$emit('update:modelValue', $event.trim() ? `{{${$event.trim()}}}` : '{{  }}')"
    placeholder="请输入JS表达式"
  >
    <template #prefix>
      <span v-html="'{{'"></span>
    </template>
    <template #suffix>
      <span v-html="'}}'"></span>
    </template>
  </el-input>
</template>

<script>
import { getInterpolation } from '@/utils'

export default {
  name: 'interpolation',
  components: {},
  props: {
    modelValue: String
  },
  setup() {
    return {
      getInterpolation
    }
  }
}
</script>

<style lang="scss" scoped></style>
