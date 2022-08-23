<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-rate
      class="form-rate"
      :model-value="modelValue"
      :disabled="options.disabled"
      :allow-half="options.allowHalf"
      :max="options.max"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'rateRender'
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
