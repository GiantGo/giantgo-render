<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      type="text"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :show-password="options.showPassword"
      :prefix-icon="options.prefixIcon"
      :suffix-icon="options.suffixIcon"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
    ></el-input>
  </el-form-item>
</template>

<script setup>
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
