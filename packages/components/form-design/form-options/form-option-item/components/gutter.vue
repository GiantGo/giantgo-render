<template>
  <el-slider :model-value="modelValue" :min="0" :max="300" @update:modelValue="update" />
</template>

<script setup>
defineOptions({
  name: 'gutterOption'
})
defineProps({
  modelValue: Number
})
const emit = defineEmits(['update:modelValue'])

const update = (val) => {
  emit('update:modelValue', val)
}
</script>

<style lang="scss" scoped></style>
