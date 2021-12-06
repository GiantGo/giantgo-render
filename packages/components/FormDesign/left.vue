<template>
  <div class="form-picker">
    <div class="form-item-section" v-for="group in groups" :key="group.name">
      <div class="title">{{ group.name }}</div>
      <div class="form-item-group">
        <template v-for="component in group.components" :key="component.name">
          <draggable
            class="form-item-group-item"
            :class="{ 'is-disabled': uuids.indexOf(component.uuid) > -1 }"
            :model-value="[component]"
            item-key="name"
            :group="{ name: 'form-draggable', pull: 'clone', put: false }"
            ghost-class="ghost"
            :sort="false"
            :disabled="uuids.indexOf(component.uuid) > -1"
            :clone="clone"
          >
            <template #item="{ element }">
              <div class="form-item-drop">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import draggable from 'vuedraggable/src/vuedraggable'
import { uuid as makeId, deepClone } from '@giantgo-render/utils'
import { inputs, pickers, complexs, layouts } from './config.js'

export default {
  components: { draggable },
  setup() {
    const uuids = inject('uuids')
    const groups = inject('groups')
    const register = inject('register')

    register('输入组件', inputs)
    register('选择组件', pickers)
    register('复杂组件', complexs)
    register('布局组件', layouts)

    return {
      uuids,
      groups,
      clone: (original) => {
        const item = deepClone(original)
        item.uuid = item.uuid || item.component.replaceAll('-', '_') + '_' + makeId(8)
        item.options.key = item.options.key || item.uuid
        return item
      }
    }
  }
}
</script>

<style lang="scss"></style>
