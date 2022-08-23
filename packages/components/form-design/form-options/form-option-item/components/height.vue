<template>
  <el-slider
    :model-value="parseInt(modelValue)"
    :format-tooltip="
      (value) => {
        return value + 'px'
      }
    "
    :min="0"
    :max="1000"
    @update:modelValue="update"
  />
</template>

<script setup>
defineOptions({
  name: 'heightOption'
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
