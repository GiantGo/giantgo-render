<template>
  <div class="form-design">
    <div class="left-container">
      <left></left>
    </div>
    <div class="center-container">
      <operator></operator>
      <form-builder></form-builder>
    </div>
    <div class="right-container">
      <form-setting></form-setting>
    </div>
  </div>
</template>

<script>
import { ref, reactive, provide, computed } from 'vue'
import { isEmptyObject, deepClone, uuid as makeId, hasOwn, validateInterpolation } from '@giantgo-render/utils'
import left from './left.vue'
import operator from './operator.vue'
import FormBuilder from './FormBuilder/index.vue'
import FormSetting from './FormSetting/index.vue'
import { form } from './config.js'

export default {
  components: { left, operator, FormBuilder, FormSetting },
  props: {
    fields: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    const state = reactive({
      formDesign: {},
      selected: {},
      cached: [],
      current: -1
    })

    const groups = ref([])

    const allComponents = computed(() => {
      return groups.value.reduce((pre, group) => pre.concat(group.components), [])
    })

    const uuids = computed(() => {
      return getUuid(state.formDesign.items, [])
    })

    const getUuid = (items, result) => {
      for (let i = 0; i < items.length; i++) {
        result.push(items[i].uuid)

        if (items[i].items && items[i].items.length) {
          getUuid(items[i].items, result)
        }
      }

      return result
    }

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
          newItem.uuid = newItem.options.key = newItem.component.replaceAll('-', '_') + '_' + makeId(8)
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
        ? allComponents.value.find((component) => component.name === state.selected.name).options[key]
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

    const register = (name = '基础组件', components = [], order = 0) => {
      const index = groups.value.findIndex((group) => group.name === name)

      if (props && props.fields && props.fields.length) {
        components = components.filter((c) => props.fields.includes(c.component))
      }

      if (!components.length) {
        return
      }

      if (index > -1) {
        groups.value[index].components = components
      } else {
        groups.value.push({ name, components, order })
      }
    }

    init()

    provide('state', state)
    provide('uuids', uuids)
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
    provide('groups', groups)
    provide('register', register)

    return {
      init,
      register,
      getJson() {
        return state.formDesign
      }
    }
  }
}
</script>

<style lang="scss"></style>
