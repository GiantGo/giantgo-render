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
import { provide, reactive, watch } from 'vue'
import { ElMessage } from 'element-plus'
import left from './left.vue'
import right from './right.vue'
import operator from './operator.vue'
import { form } from './config.js'
import { isEmptyObject, deepClone, uuid as makeId, debounce, hasOwn } from '@/utils/index.js'
import { validateInterpolation } from '@/utils/validate.js'
import { components } from './config'

const query = (items, uuid) => {
  let result = false

  if (!uuid) {
    return false
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
      newItem.uuid = newItem.options.key = newItem.component + '_' + makeId(8)
      if (hasOwn(newItem, 'items')) {
        newItem.items = []
      }
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
    let state = reactive({
      formDesign: {},
      selected: {},
      cached: [],
      current: -1
    })

    const setSelected = (uuid) => {
      state.selected = query([state.formDesign], uuid) || state.formDesign
    }

    const updateFormItem = ({ uuid, items }) => {
      const target = query([state.formDesign], uuid)

      if (target) {
        target.items = items
      }
      addCache()
    }

    const updateFormOption = ({ uuid, key, value }) => {
      const item = query([state.formDesign], uuid)

      if (item) {
        item.options[key] = value
      }
    }

    const updateSelectedFormOption = ({ key, value }) => {
      state.selected.options[key] = value
      addCache()
    }

    const switchInterpolate = (key) => {
      const option = state.selected.options[key]
      state.selected.options[key] = validateInterpolation(option)
        ? components.find((component) => component.name === state.selected.name).options[key]
        : '{{  }}'
      addCache()
    }

    const copyFormItem = (uuid) => {
      const newItem = copy(state.formDesign.items, uuid)
      state.selected = newItem
      addCache()
    }

    const removeFormItem = (uuid) => {
      remove(state.formDesign.items, uuid)
      state.selected = state.formDesign
      addCache()
    }

    const revoke = () => {
      if (state.cached.length && state.current > 0) {
        state.current--
        state.formDesign = deepClone(state.cached[state.current])
        setSelected(state.selected.uuid)
      }
    }

    const forward = () => {
      if (state.cached.length && state.current < state.cached.length - 1) {
        state.current++
        state.formDesign = deepClone(state.cached[state.current])
        setSelected(state.selected.uuid)
      }
    }

    const addCache = () => {
      if (state.cached.length >= 10) {
        state.cached.shift()
      }

      state.cached.splice(state.current + 1, Infinity, deepClone(state.formDesign))
      state.current = state.cached.length - 1
    }

    const init = (config) => {
      state.formDesign = config || deepClone(form)
      state.selected = query([state.formDesign], state.selected.uuid) || state.formDesign

      addCache()
    }

    init()

    watch(
      () => state.formDesign,
      debounce(() => {
        ElMessage.success('已自动保存')
      }, 3000),
      { deep: true }
    )

    provide('state', state)
    provide('clear', init)
    provide('init', init)
    provide('setSelected', setSelected)
    provide('updateFormItem', updateFormItem)
    provide('updateFormOption', updateFormOption)
    provide('updateSelectedFormOption', updateSelectedFormOption)
    provide('switchInterpolate', switchInterpolate)
    provide('copyFormItem', copyFormItem)
    provide('removeFormItem', removeFormItem)
    provide('revoke', revoke)
    provide('forward', forward)

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
    height: 100%;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .left-container {
    width: 270px;
  }

  .right-container {
    width: 380px;
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
