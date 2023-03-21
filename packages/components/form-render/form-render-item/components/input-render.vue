<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      type="text"
      :model-value="modelValue"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :show-password="options.showPassword"
      :prefix-icon="ElementPlusIconsVue[options.prefixIcon]"
      :suffix-icon="ElementPlusIconsVue[options.suffixIcon]"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

defineOptions({
  name: 'inputRender'
})
defineProps({
  path: String,
  modelValue: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
