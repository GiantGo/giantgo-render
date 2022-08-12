<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      type="textarea"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :placeholder="options.placeholder"
      :rows="options.rows"
      :disabled="options.disabled"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
    ></el-input>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'textareaRender'
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
