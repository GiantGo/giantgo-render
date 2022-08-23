<template>
  <el-input-number
    :model-value="modelValue"
    @change="$emit('update:modelValue', $event ? $event : undefined)"
  />
</template>

<script setup>
defineOptions({
  name: 'maxlengthOption'
})
defineProps({
  modelValue: Number
})
</script>

<style lang="scss" scoped></style>
