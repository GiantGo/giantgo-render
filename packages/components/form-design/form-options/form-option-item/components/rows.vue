<template>
  <el-slider :model-value="modelValue" :min="2" :max="10" @update:modelValue="update" />
</template>

<script setup>
defineOptions({
  name: 'rowsOption'
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
