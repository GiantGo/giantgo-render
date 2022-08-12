<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-date-picker
      type="daterange"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :format="options.format"
      :prefix-icon="options.prefixIcon"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'dateRangePickerRender'
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
</script>

<style lang="scss" scoped></style>
