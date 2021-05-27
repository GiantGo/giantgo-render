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
    layouts: [],
    properties: []
  }
}

const state = getDefaultState()

const mutations = {
  INIT: (state, {}) => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
