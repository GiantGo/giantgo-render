<template>
  <div class="form-item-panel">
    <draggable
      class="form-item-drop"
      :model-value="items"
      @update:modelValue="$emit('update:items', $event)"
      @start="dragStart"
      @add="add"
      tag="transition-group"
      item-key="name"
      v-bind="{ animation: 200, group: 'form-draggable', disabled: false, ghostClass: 'ghost' }"
      :component-data="{ tag: 'div', type: 'transition-group', name: !drag ? 'flip-list' : null }"
    >
      <template #item="{ element, index }">
        <form-item
          :uuid="element.uuid"
          :options="element.options"
          :component="element.component"
          :items="element.items"
          @update:items="elementChange(index, $event)"
        ></form-item>
      </template>
    </draggable>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable/src/vuedraggable'
import { uuid, deepClone } from '@/utils/index.js'
import FormItem from './index.vue'

export default {
  name: 'objectItem',
  components: { draggable, FormItem },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const drag = ref(false)

    const add = (evt) => {
      const item = deepClone(props.items[evt.newIndex])
      item.uuid = item.options.key = item.component + '-' + uuid(16)
      props.items[evt.newIndex] = item
      store.dispatch('design/setSeleted', item.uuid)
    }

    const dragStart = (evt) => {
      store.dispatch('design/setSeleted', props.items[evt.oldIndex].uuid)
    }

    const elementChange = (index, value) => {
      props.items[index].items = value
      emit('update:items', props.items)
    }

    return {
      drag,
      add,
      dragStart,
      elementChange
    }
  }
}
</script>

<style lang="scss"></style>
