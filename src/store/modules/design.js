const getDefaultState = () => {
  return {
    basics: [
      {
        name: '输入框',
        component: 'input-field',
        uuid: '',
        options: {
          label: '输入框',
          key: ''
        }
      },
      {
        name: '文本框',
        component: 'textarea-field',
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
        component: 'object-field',
        uuid: '',
        options: {
          label: '对象布局',
          key: ''
        },
        fields: []
      },
      {
        name: '卡片布局',
        component: 'card-field',
        uuid: '',
        options: {
          label: '卡片布局',
          key: '',
          shadow: 'always'
        },
        fields: []
      }
    ],
    formDesign: {
      name: '对象布局',
      component: 'object-field',
      uuid: '',
      options: {
        label: '对象布局',
        key: ''
      },
      fields: []
    },
    formOptions: {
      labelWidth: '80px'
    },
    selected: ''
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
  UPDATE_FORM_OPTIONS: (state, formOptions) => {
    state.formOptions = formOptions
  },
  SET_SELECTED: (state, uuid) => {
    state.selected = uuid
  }
}

const actions = {
  updateFormItems({ commit }, formItems) {
    commit('UPDATE_FORM_ITEMS', formItems)
  },
  updateFormOptions({ commit }, formOptions) {
    commit('UPDATE_FORM_OPTIONS', formOptions)
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
