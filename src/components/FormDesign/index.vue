<template>
  <div class="form-design-container">
    <div class="left-container">
      <left></left>
    </div>
    <div class="center-container">
      <operator></operator>
      <form-builder />
    </div>
    <div class="right-container">
      <right></right>
    </div>
  </div>
</template>

<script>
import { provide, reactive, readonly, watch, toRaw } from 'vue'
import { ElMessage } from 'element-plus'
import left from './left.vue'
import right from './right.vue'
import operator from './operator.vue'
import { form } from './config.js'
import { isEmptyObject, deepClone, uuid as makeId, debounce } from '@/utils/index.js'

const query = (items, uuid) => {
  let result = {}

  if (!uuid) {
    return result
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].uuid === uuid) {
      return items[i]
    }

    if (items[i].items && items[i].items.length) {
      result = query(items[i].items, uuid)
      if (!isEmptyObject(result)) {
        return result
      }
    }
  }

  return result
}

const copy = (items, uuid) => {
  if (!uuid) {
    return false
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].uuid === uuid) {
      let newItem = deepClone(items[i])
      const newId = newItem.component + '-' + makeId(16)
      newItem.uuid = newItem.options.key = newId
      newItem.items = []
      items.splice(i + 1, 0, newItem)
      return newItem
    }

    if (items[i].items && items[i].items.length) {
      const newItem = copy(items[i].items, uuid)
      if (newItem) {
        return newItem
      }
    }
  }

  return false
}

const remove = (items, uuid) => {
  if (!uuid) {
    return false
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].uuid === uuid) {
      items.splice(i, 1)
      return true
    }

    if (items[i].items && items[i].items.length) {
      if (remove(items[i].items, uuid)) {
        return true
      }
    }
  }
}

export default {
  components: { left, right, operator },
  setup() {
    const formDesign = deepClone(form)
    let state = reactive({
      formDesign: formDesign,
      selected: formDesign
    })

    const init = (config) => {
      const formDesign = config || deepClone(form)
      state.formDesign = formDesign
      state.selected = formDesign
    }

    const setSelected = (uuid) => {
      if (state.selected.uuid !== uuid) {
        state.selected = query([state.formDesign], uuid) || {}
      }
    }

    const updateFormItem = ({ uuid, items }) => {
      const target = query([state.formDesign], uuid)

      if (target) {
        target.items = items
      }
    }

    const updateFormOption = ({ key, value }) => {
      state.selected.options[key] = value
    }

    const copyFormItem = (uuid) => {
      const newItem = copy(state.formDesign.items, uuid)
      state.selected = reactive(newItem)
    }

    const removeFormItem = (uuid) => {
      remove(state.formDesign.items, uuid)
      state.selected = state.formDesign
    }

    const save = debounce(() => {
      console.log(toRaw(state.formDesign))
      ElMessage.success('已自动保存')
    }, 3000)

    watch(state.formDesign, save)

    provide('state', readonly(state))
    provide('clear', init)
    provide('setSelected', setSelected)
    provide('updateFormItem', updateFormItem)
    provide('updateFormOption', updateFormOption)
    provide('copyFormItem', copyFormItem)
    provide('removeFormItem', removeFormItem)

    return {
      init
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.form-design-container {
  display: flex;
  overflow: hidden;
  height: 100%;
  min-height: 30vh;
  position: relative;

  .left-container,
  .right-container {
    width: $sideBarWidth;
    height: 100%;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .center-container {
    display: flex;
    position: relative;
    flex: 1;
    height: 100%;
    padding: 5px;
    flex-direction: column;
    border-left: 1px solid $divider-color;
    border-right: 1px solid $divider-color;
  }
}
</style>
