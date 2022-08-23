<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      :model-value="modelValue"
      :options="region"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :clearable="options.clearable"
      :props="{
        expandTrigger: options.expandTrigger
      }"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>

<script setup>
import { reactive } from 'vue'
import { areaTree } from '@giantgo-render/utils'

defineOptions({
  name: 'areaRender'
})

defineProps({
  path: String,
  modelValue: Array,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
const region = reactive(areaTree)
</script>

<style lang="scss" scoped></style>
