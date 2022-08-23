<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    :min="0"
    :max="300"
    :format-tooltip="
      (value) => {
        return value + 'px'
      }
    "
    @update:modelValue="update"
  />
</template>

<script setup>
defineOptions({
  name: 'labelWidthOption'
})
defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const update = (val) => {
  emit('update:modelValue', `${val}px`)
}
</script>

<style lang="scss" scoped></style>
