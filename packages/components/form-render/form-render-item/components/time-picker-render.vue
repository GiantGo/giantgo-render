<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-time-picker
      :model-value="modelValue"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :format="options.format"
      :value-format="options.valueFormat"
      :prefix-icon="ElementPlusIconsVue[options.prefixIcon]"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

defineOptions({
  name: 'timePickerRender'
})
defineProps({
  path: String,
  modelValue: Date,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
