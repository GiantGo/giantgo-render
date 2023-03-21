<template>
  <div class="form-item-list">
    <form-render-item
      v-for="item in items"
      :key="item.uuid"
      :model-value="modelValue[item.options.key]"
      :items="item.items"
      :options="item.options"
      :component="item.component"
      :path="item.options.key ? path + '.' + item.options.key : path"
      :style="{
        'padding-left': options.gutter / 2 + 'px',
        'padding-right': options.gutter / 2 + 'px'
      }"
      @update:modelValue="update(item.options.key, $event)"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineOptions({
  name: 'objectRender'
})

const props = defineProps({
  path: String,
  modelValue: Object,
  items: {
    type: Array,
    default() {
      return []
    }
  },
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
const emitter = inject('emitter')
const emit = defineEmits(['update:modelValue'])
const update = (key, value) => {
  emitter.emit('fieldChange', { key, value })
  emit('update:modelValue', Object.assign({}, props.modelValue, { [key]: value }))
}
</script>

<style lang="scss"></style>
