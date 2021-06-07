import { isEmptyObject, deepClone, uuid as makeId } from '@/utils/index.js'

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
      let item = deepClone(items[i])
      const newId = item.component + '-' + makeId(16)
      item.uuid = item.options.key = newId
      items.splice(i + 1, 0, item)
      return newId
    }

    if (items[i].items && items[i].items.length) {
      const newId = copy(items[i].items, uuid)
      if (newId) {
        return newId
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

const getDefaultState = () => {
  const basics = [
    {
      name: '输入框',
      component: 'input-item',
      uuid: '',
      options: {
        label: '输入框',
        key: ''
      }
    },
    {
      name: '文本框',
      component: 'textarea-item',
      uuid: '',
      options: {
        label: '文本框',
        key: '',
        rows: 4
      }
    }
  ]

  const layouts = [
    {
      name: '对象布局',
      component: 'object-item',
      uuid: '',
      options: {
        label: '对象布局',
        key: ''
      },
      items: []
    },
    {
      name: '卡片布局',
      component: 'card-item',
      uuid: '',
      options: {
        label: '卡片布局',
        key: '',
        shadow: 'always'
      },
      items: []
    }
  ]

  const formDesign = {
    name: '表单',
    component: 'object-item',
    uuid: 'root',
    options: {
      labelWidth: '80px',
      labelPosition: 'right'
    },
    items: []
  }

  return {
    mode: 'design',
    basics: basics,
    layouts: layouts,
    formDesign: formDesign,
    formOptions: formDesign.options,
    selected: '',
    formData: {}
  }
}

const state = getDefaultState()

const mutations = {
  INIT: (state, formDesign) => {
    const initState = getDefaultState()
    Object.assign(state, initState, { formDesign: formDesign || initState.formDesign })
  },
  UPDATE_FORM_ITEMS: (state, { uuid, items }) => {
    const target = query([state.formDesign], uuid)

    if (target) {
      target.items = items
    }
  },
  UPDATE_FORM_OPTION: (state, { key, value }) => {
    state.formOptions[key] = value
  },
  SET_SELECTED: (state, uuid) => {
    if (state.selected !== uuid) {
      state.selected = uuid
      state.formOptions = query([state.formDesign], uuid).options || {}
    }
  },
  SET_MODE: (state, mode) => {
    state.mode = mode
  }
}

const actions = {
  init({ commit }, formDesign) {
    commit('INIT', formDesign)
    commit('SET_SELECTED', 'root')
  },
  updateFormItems({ commit }, { uuid, items }) {
    commit('UPDATE_FORM_ITEMS', { uuid, items })
  },
  updateFormOption({ commit }, { key, value }) {
    commit('UPDATE_FORM_OPTION', { key, value })
  },
  copyFormItem({ commit, state }, uuid) {
    const formItems = deepClone(state.formDesign.items)
    const newId = copy(formItems, uuid)
    commit('UPDATE_FORM_ITEMS', formItems)
    commit('SET_SELECTED', newId)
  },
  removeFormItem({ commit }, uuid) {
    const formItems = deepClone(state.formDesign.items)
    remove(formItems, uuid)
    commit('UPDATE_FORM_ITEMS', formItems)
    commit('SET_SELECTED', 'root')
  },
  setSeleted({ commit }, uuid) {
    commit('SET_SELECTED', uuid)
  },
  setMode({ commit }, mode) {
    commit('SET_MODE', mode)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
