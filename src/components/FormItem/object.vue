<template>
  <div class="form-item-panel">
    <draggable
      class="form-item-drop"
      :model-value="fields"
      @update:modelValue="$emit('update:fields', $event)"
      @start="dragStart"
      @add="add"
      tag="transition-group"
      item-key="name"
      v-bind="{ animation: 200, group: 'form-draggable', disabled: false, ghostClass: 'ghost' }"
      :component-data="{ tag: 'div', type: 'transition-group', name: !drag ? 'flip-list' : null }"
    >
      <template #item="{ element }">
        <div class="form-item">
          <form-item
            :options="element.options"
            :component="element.component"
            v-model:fields="element.fields"
          ></form-item>
        </div>
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
  name: 'objectField',
  components: { draggable, FormItem },
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    const store = useStore()
    const drag = ref(false)

    const add = (evt) => {
      const field = deepClone(props.fields[evt.newIndex])
      field.uuid = field.options.key = field.component + '-' + uuid(16)
      props.fields[evt.newIndex] = field
      store.dispatch('design/setSeleted', field.uuid)
    }

    const dragStart = (evt) => {
      store.dispatch('design/setSeleted', props.fields[evt.oldIndex].uuid)
    }

    return {
      drag,
      add,
      dragStart
    }
  }
}
</script>

<style lang="scss"></style>
