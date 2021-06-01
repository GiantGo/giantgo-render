<template>
  <el-card :shadow="options.shadow">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <draggable
      class="form-item-panel"
      v-model="fields"
      @start="dragStart"
      @end="dragEnd"
      @change="change"
      tag="transition-group"
      item-key="name"
      v-bind="{ animation: 200, group: 'form-draggable', disabled: false, ghostClass: 'ghost' }"
      :component-data="{ tag: 'div', type: 'transition-group', name: !drag ? 'flip-list' : null }"
    >
      <template #item="{ element }">
        <div class="form-item">
          <form-item :options="element.options" :component="element.component"></form-item>
        </div>
      </template>
    </draggable>
  </el-card>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import FormItem from '../FormItem/index.vue'
import useDrag from './useDrag'

export default {
  name: 'cardField',
  components: { draggable, FormItem },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    fields: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const { drag, dragStart, dragEnd } = useDrag()

    const change = (evt) => {
      console.log(evt)
    }

    return { drag, dragStart, dragEnd, change }
  }
}
</script>

<style lang="scss" scoped></style>
