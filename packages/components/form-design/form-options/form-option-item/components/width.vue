<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    :min="0"
    :max="100"
    :marks="{ 33: '1/3', 50: '1/2', 66: '2/3' }"
    @update:modelValue="update"
  />
</template>

<script setup>
defineOptions({
  name: 'widthOption'
})
defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const update = (val) => {
  emit('update:modelValue', `${val}%`)
}
</script>

<style lang="scss" scoped></style>
