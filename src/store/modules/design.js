import { isEmptyObject } from '@/utils/index.js'

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

const getDefaultState = () => {
  return {
    basics: [
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
    ],
    layouts: [
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
    ],
    formDesign: {
      name: '根布局',
      component: 'object-item',
      uuid: '',
      options: {
        label: '根布局',
        key: ''
      },
      items: []
    },
    formOptions: {
      labelWidth: '80px'
    },
    formItemOptions: {},
    selected: ''
  }
}

const state = getDefaultState()

const mutations = {
  INIT: (state, {}) => {
    Object.assign(state, getDefaultState())
  },
  UPDATE_FORM_ITEMS: (state, formItems) => {
    state.formDesign.items = formItems
  },
  UPDATE_FORM_OPTION: (state, { key, value }) => {
    state.formOptions[key] = value
  },
  UPDATE_FORM_ITEM_OPTION: (state, { key, value }) => {
    state.formItemOptions[key] = value
  },
  SET_SELECTED: (state, uuid) => {
    state.selected = uuid
    state.formItemOptions = query(state.formDesign.items, uuid).options || {}
  }
}

const actions = {
  updateFormItems({ commit }, formItems) {
    commit('UPDATE_FORM_ITEMS', formItems)
  },
  updateFormOption({ commit }, { key, value }) {
    commit('UPDATE_FORM_OPTION', { key, value })
  },
  updateFormItemOption({ commit }, { key, value }) {
    commit('UPDATE_FORM_ITEM_OPTION', { key, value })
  },
  setSeleted({ commit }, uuid) {
    commit('SET_SELECTED', uuid)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
