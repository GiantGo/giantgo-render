<template>
  <div class="form-picker">
    <div class="form-item-section">
      <div class="title">输入组件</div>
      <draggable
        class="form-item-group"
        v-model="inputs"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="form-item-section">
      <div class="title">选择组件</div>
      <draggable
        class="form-item-group"
        v-model="pickers"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="form-item-section">
      <div class="title">复杂组件</div>
      <draggable
        class="form-item-group"
        v-model="complexs"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="form-item-section">
      <div class="title">布局组件</div>
      <draggable
        class="form-item-group"
        v-model="layouts"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { uuid, deepClone } from '../../utils'
import { inputs, pickers, complexs, layouts } from './config.js'

export default {
  components: { draggable },
  setup() {
    return {
      clone: (original) => {
        const item = deepClone(original)
        item.uuid = item.options.key = item.component.replaceAll('-', '_') + '_' + uuid(8)
        return item
      },
      inputs,
      pickers,
      complexs,
      layouts
    }
  }
}
</script>

<style lang="scss"></style>
