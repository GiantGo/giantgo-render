<template>
  <draggable
    class="form-item-drop-list"
    :model-value="items"
    @update:modelValue="updateItems"
    @start="dragStart"
    @add="add"
    item-key="uuid"
    :animation="200"
    :group="{ name: 'form-draggable' }"
    ghost-class="ghost"
  >
    <template #item="{ element }">
      <div
        class="form-item-drop-item"
        :style="{
          width: element.options.width
        }"
      >
        <form-builder-item
          :component="element.component"
          :uuid="element.uuid"
          :items="element.items"
          :options="element.options"
          :path="element.options.key ? path + '.' + element.options.key : path"
          :style="{
            'padding-left': options.gutter / 2 + 'px',
            'padding-right': options.gutter / 2 + 'px'
          }"
        ></form-builder-item>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable/src/vuedraggable'
import { inject } from 'vue'

defineOptions({
  name: 'objectBuilder'
})

const props = defineProps({
  path: String,
  uuid: String,
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

const setSelected = inject('setSelected')
const updateFormItem = inject('updateFormItem')
const add = (evt) => setSelected(props.items[evt.newIndex].uuid)
const dragStart = (evt) => setSelected(props.items[evt.oldIndex].uuid)
const updateItems = (items) => updateFormItem({ uuid: props.uuid, items })
</script>

<style lang="scss"></style>
