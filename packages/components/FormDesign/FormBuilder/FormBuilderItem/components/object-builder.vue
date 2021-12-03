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
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { inject, defineAsyncComponent } from 'vue'

export default {
  name: 'objectBuilder',
  components: { draggable, FormBuilderItem: defineAsyncComponent(() => import('../index.vue')) },
  props: {
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
  },
  setup(props) {
    const setSelected = inject('setSelected')
    const updateFormItem = inject('updateFormItem')

    return {
      add: (evt) => setSelected(props.items[evt.newIndex].uuid),
      dragStart: (evt) => setSelected(props.items[evt.oldIndex].uuid),
      updateItems: (items) => updateFormItem({ uuid: props.uuid, items })
    }
  }
}
</script>

<style lang="scss"></style>
