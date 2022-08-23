<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input-number
      :model-value="modelValue"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'numberRender'
})
defineProps({
  path: String,
  modelValue: Number,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
