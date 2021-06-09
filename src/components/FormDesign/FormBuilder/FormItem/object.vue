<template>
  <draggable
    class="form-item-drop-list"
    :model-value="items"
    @update:modelValue="updateFormItems"
    @start="dragStart"
    @add="add"
    item-key="uuid"
    v-bind="{ animation: 200, group: 'form-draggable', disabled: false, ghostClass: 'ghost' }"
  >
    <template #item="{ element }">
      <form-item-builder
        :builder="element.builder"
        :uuid="element.uuid"
        :items="element.items"
        :options="element.options"
        :path="path"
      ></form-item-builder>
    </template>
  </draggable>
</template>

<script>
import { useStore } from 'vuex'
import draggable from 'vuedraggable/src/vuedraggable'

export default {
  name: 'objectBuilder',
  components: { draggable },
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
    const store = useStore()

    const add = (evt) => {
      store.dispatch('design/setSeleted', props.items[evt.newIndex].uuid)
    }

    const dragStart = (evt) => {
      store.dispatch('design/setSeleted', props.items[evt.oldIndex].uuid)
    }

    const updateFormItems = (items) => {
      store.dispatch('design/updateFormItems', { uuid: props.uuid, items: items })
    }

    return {
      add,
      dragStart,
      updateFormItems
    }
  }
}
</script>

<style lang="scss"></style>
