<template>
  <div class="form-item-panel">
    <draggable
      class="form-item-drop"
      :model-value="config.items"
      @update:modelValue="updateFormItems"
      @start="dragStart"
      @add="add"
      item-key="uuid"
      v-bind="{ animation: 200, group: 'form-draggable', disabled: !draggable, ghostClass: 'ghost' }"
    >
      <template #item="{ element }">
        <form-item :config="element" :path="path"></form-item>
      </template>
    </draggable>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable/src/vuedraggable'
import { uuid, deepClone } from '@/utils/index.js'
import FormItem from './index.vue'

export default {
  name: 'objectItem',
  components: { draggable, FormItem },
  props: {
    path: String,
    config: {
      type: Object,
      default() {
        return {
          uuid: '',
          component: '',
          options: {},
          items: []
        }
      }
    }
  },
  setup(props) {
    const store = useStore()

    const add = (evt) => {
      const item = deepClone(props.config.items[evt.newIndex])

      if (!item.uuid) {
        item.uuid = item.options.key = item.component + '-' + uuid(16)
      }

      props.config.items[evt.newIndex] = item
      store.dispatch('design/setSeleted', item.uuid)
    }

    const dragStart = (evt) => {
      store.dispatch('design/setSeleted', props.config.items[evt.oldIndex].uuid)
    }

    const updateFormItems = (items) => {
      store.dispatch('design/updateFormItems', { uuid: props.config.uuid, items: items })
    }

    return {
      add,
      dragStart,
      updateFormItems,
      draggable: computed(() => store.getters.draggable)
    }
  }
}
</script>

<style lang="scss"></style>
