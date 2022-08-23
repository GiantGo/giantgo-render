<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-color-picker
      :model-value="modelValue"
      :disabled="options.disabled"
      :show-alpha="options.showAlpha"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'colorPickerRender'
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
