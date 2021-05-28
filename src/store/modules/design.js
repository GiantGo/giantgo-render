const getDefaultState = () => {
  return {
    basics: [
      {
        name: '输入框',
        component: 'input',
        type: 'string',
        options: {
          title: '输入框',
          key: ''
        }
      },
      {
        name: '文本框',
        component: 'textarea',
        type: 'string',
        options: {
          title: '文本框',
          key: '',
          rows: ''
        }
      }
    ],
    layouts: [
      {
        name: '卡片布局',
        component: 'card',
        type: 'object',
        options: {
          title: '卡片布局',
          key: ''
        }
      }
    ],
    formItems: [],
    formOptions: {
      labelWidth: '80px'
    },
    formItemOptions: {}
  }
}

const state = getDefaultState()

const mutations = {
  INIT: (state, {}) => {
    Object.assign(state, getDefaultState())
  },
  UPDATE_FORM_ITEMS: (state, formItems) => {
    state.formItems = formItems
  },
  UPDATE_FORM_ITEM_OPTIONS: (state, formItemOptions) => {
    state.formItemOptions = formItemOptions
  },
  UPDATE_FORM_OPTIONS: (state, formOptions) => {
    state.formOptions = formOptions
  }
}

const actions = {
  updateFormItems({ commit }, formItems) {
    commit('UPDATE_FORM_ITEMS', formItems)
  },
  updateFormItemOptions({ commit }, formItemOptions) {
    commit('UPDATE_FORM_ITEM_OPTIONS', formItemOptions)
  },
  updateFormOptions({ commit }, formOptions) {
    commit('UPDATE_FORM_OPTIONS', formOptions)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
