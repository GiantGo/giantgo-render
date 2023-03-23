<template>
  <div class="form-picker">
    <div v-for="group in groups.sort((a, b) => a.order - b.order)" :key="group.name" class="form-item-section">
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

<script setup lang="ts">
import { inject } from 'vue'
import draggable from 'vuedraggable/src/vuedraggable'
import { cloneDeep } from 'lodash-es'
import { uuid as makeId } from '@giantgo-render/utils'
import { assists, complexs, inputs, layouts, matrixs, pickers } from '../config'
import type { FormDesign, FormDesignRegister, Group } from '@giantgo-render/tokens'

defineOptions({
  name: 'formFields'
})

const uuids = inject<string>('uuids', '')
const groups = inject<Array<Group>>('groups', [])
const register = inject<FormDesignRegister>('register')

const clone = (original: FormDesign) => {
  const item = cloneDeep(original)
  item.uuid = item.uuid || `${item.component.replaceAll('-', '_')}_${makeId(8)}`
  item.options.key = item.options.key || item.uuid
  return item
}

if (register) {
  register('输入组件', inputs, 1)
  register('选择组件', pickers, 2)
  register('复杂组件', complexs, 3)
  register('矩阵组件', matrixs, 4)
  register('展示组件', assists, 4)
  register('布局组件', layouts, 5)
}
</script>

<style lang="scss"></style>
