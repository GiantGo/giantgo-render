<template>
  <div class="form-design">
    <div class="left-container">
      <form-fields />
    </div>
    <div class="center-container">
      <form-operators />
      <form-builder />
    </div>
    <div class="right-container">
      <form-options />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref } from 'vue'
import { hasOwn, uuid as makeId, validateInterpolation } from '@giantgo-render/utils'
import { cloneDeep, isEmpty } from 'lodash-es'
import { form } from './config'

import type { FormDesign, FormDesignOption, Group } from '@giantgo-render/tokens'

defineOptions({
  name: 'formDesign'
})

const props = defineProps({
  fields: {
    type: Array,
    default() {
      return []
    }
  }
})

const state = reactive<{
  formDesign: FormDesign
  selected: FormDesign
  cached: Array<FormDesign>
  current: number
}>({
  formDesign: {
    name: '',
    uuid: '',
    component: '',
    options: {}
  },
  selected: {
    name: '',
    uuid: '',
    component: '',
    options: {}
  },
  cached: [],
  current: -1
})

const groups = ref<Array<Group>>([])

const getUuid = (items: Array<FormDesign> = [], result: Array<string>) => {
  for (let i = 0; i < items.length; i++) {
    result.push(items[i].uuid)

    if (items[i].items && items[i].items!.length) {
      getUuid(items[i].items, result)
    }
  }

  return result
}

const allComponents = computed(() => {
  return groups.value.reduce((pre, group) => pre.concat(group.components || []), [form])
})

const uuids = computed(() => {
  return getUuid(state.formDesign.items, [])
})

const query = (items: Array<FormDesign> = [], uuid: string): FormDesign | undefined => {
  let result: any

  if (!uuid) {
    return
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].uuid === uuid) {
      return items[i]
    }

    if (items[i].items && items[i].items!.length) {
      result = query(items[i].items, uuid)
      if (!isEmpty(result)) {
        return result
      }
    }
  }

  return result
}

const copy = (items: Array<FormDesign> = [], uuid: string): FormDesign | undefined => {
  if (!uuid) {
    return
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].uuid === uuid) {
      const newItem: FormDesign = cloneDeep(items[i])
      newItem.uuid = newItem.options.key = `${newItem.component.replace('/-/gi', '_')}_${makeId(8)}`
      if (hasOwn(newItem, 'items')) {
        newItem.items = []
      }
      items.splice(i + 1, 0, newItem)
      return newItem
    }

    if (items[i].items && items[i].items!.length) {
      const newItem = copy(items[i].items, uuid)
      if (newItem) {
        return newItem
      }
    }
  }

  return
}

const remove = (items: Array<FormDesign> = [], uuid: string): boolean => {
  if (!uuid) {
    return false
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i].uuid === uuid) {
      items.splice(i, 1)
      return true
    }

    if (items[i].items && items[i].items!.length) {
      if (remove(items[i].items, uuid)) {
        return true
      }
    }
  }

  return false
}

const setSelected = (uuid: string) => {
  state.selected = query([state.formDesign], uuid) || state.formDesign
}

const updateFormItem = ({ uuid, items }: { uuid: string; items: Array<FormDesign> }) => {
  const target = query([state.formDesign], uuid)

  if (target) {
    target.items = items
  }
  addCache()
}

const updateFormOption = ({ uuid, key, value }: { uuid: string; key: keyof FormDesignOption; value: any }) => {
  const item = query([state.formDesign], uuid)

  if (item) {
    item.options[key] = value
  }
}

const updateSelectedFormOption = ({ key, value }: { key: keyof FormDesignOption; value: any }) => {
  state.selected.options[key] = value
  addCache()
}

const switchInterpolate = (key: keyof FormDesignOption) => {
  const option = state.selected.options[key]
  state.selected.options[key] = validateInterpolation(option)
    ? allComponents.value.find((component) => component.name === state.selected.name)!.options[key]
    : '{{  }}'
  addCache()
}

const copyFormItem = (uuid: string) => {
  const newItem = copy(state.formDesign.items, uuid)
  if (newItem) {
    state.selected = newItem
  }
  addCache()
}

const removeFormItem = (uuid: string) => {
  remove(state.formDesign.items, uuid)
  state.selected = state.formDesign
  addCache()
}

const revoke = () => {
  if (state.cached.length && state.current > 0) {
    state.current--
    state.formDesign = cloneDeep(state.cached[state.current])
    setSelected(state.selected.uuid)
  }
}

const forward = () => {
  if (state.cached.length && state.current < state.cached.length - 1) {
    state.current++
    state.formDesign = cloneDeep(state.cached[state.current])
    setSelected(state.selected.uuid)
  }
}

const addCache = () => {
  if (state.cached.length >= 10) {
    state.cached.shift()
  }

  state.cached.splice(state.current + 1, Infinity, cloneDeep(state.formDesign))
  state.current = state.cached.length - 1
}

const init = (config?: FormDesign) => {
  state.formDesign = config || cloneDeep(form)
  state.selected = query([state.formDesign], state.selected.uuid) || state.formDesign

  addCache()
}

const clear = () => {
  state.formDesign.items = []
  state.selected = state.formDesign
  addCache()
}

const register = (name = '基础组件', components: Array<FormDesign> = [], order = 0) => {
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

const getJson = () => {
  return state.formDesign
}

init()

provide('state', state)
provide('uuids', uuids)
provide('clear', clear)
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

defineExpose({
  init,
  register,
  getJson
})
</script>

<style lang="scss" scoped></style>
