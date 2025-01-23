<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      type="text"
      :model-value="options.defaultValue"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :show-password="options.showPassword"
      :prefix-icon="ElementPlusIconsVue[options.prefixIcon]"
      :suffix-icon="ElementPlusIconsVue[options.suffixIcon]"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
    />
  </el-form-item>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

defineOptions({
  name: 'inputBuilder'
})
defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
