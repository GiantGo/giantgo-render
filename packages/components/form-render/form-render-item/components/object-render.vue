<template>
  <div class="form-item-list">
    <form-render-item
      v-for="item in items"
      :key="item.uuid"
      :model-value="modelValue[item.options.key]"
      @update:modelValue="update(item.options.key, $event)"
      :component="item.component"
      :items="item.items"
      :options="item.options"
      :path="item.options.key ? path + '.' + item.options.key : path"
      :style="{
        'padding-left': options.gutter / 2 + 'px',
        'padding-right': options.gutter / 2 + 'px'
      }"
    ></form-render-item>
  </div>
</template>

<script setup>
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
const emit = defineEmits(['update:modelValue'])
const update = (key, value) => {
  emit('update:modelValue', Object.assign({}, props.modelValue, { [key]: value }))
}
</script>

<style lang="scss"></style>
