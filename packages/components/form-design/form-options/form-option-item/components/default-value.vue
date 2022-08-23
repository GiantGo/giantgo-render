<template>
  <form-render-item
    :model-value="modelValue"
    :component="component"
    :items="items"
    :options="options"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script setup>
import { computed, inject } from 'vue'

defineOptions({
  name: 'defaultValueOption'
})

defineProps({
  modelValue: [String, Number, Boolean, Date, Object, Array]
})

const state = inject('state')
const component = computed(() => state.selected.component)
const items = computed(() => state.selected.items)
const options = computed(() =>
  Object.assign({}, state.selected.options, {
    label: '',
    clearable: true,
    disabled: false,
    width: '100%'
  })
)
</script>

<style lang="scss" scoped></style>
