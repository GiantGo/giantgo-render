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
      const newId = item.component + '_' + makeId(16)
      item.uuid = item.options.key = newId
      item.items = []
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

const rules = [{ required: false, message: '必填项', trigger: 'blur' }]

const getDefaultState = () => {
  const basics = [
    {
      name: '输入框',
      type: String,
      component: 'input',
      uuid: '',
      options: {
        label: '输入框',
        key: '',
        defaultValue: '',
        width: '100%',
        placeholder: '请输入',
        prefixIcon: '',
        suffixIcon: '',
        clearable: false,
        disabled: false,
        maxlength: undefined,
        showWordLimit: false,
        rules: rules
      }
    },
    {
      name: '文本框',
      type: String,
      component: 'textarea',
      uuid: '',
      options: {
        label: '文本框',
        key: '',
        defaultValue: '',
        width: '100%',
        placeholder: '请输入内容',
        rows: 4,
        disabled: false,
        maxlength: undefined,
        showWordLimit: false,
        rules: rules
      }
    },
    {
      name: '数字输入框',
      type: Number,
      component: 'number',
      uuid: '',
      options: {
        label: '数字输入框',
        key: '',
        defaultValue: 0,
        width: '100%',
        min: 0,
        max: 100,
        disabled: false,
        rules: rules
      }
    },
    {
      name: '下拉单选',
      type: String,
      component: 'select',
      uuid: '',
      options: {
        label: '下拉单选',
        key: '',
        defaultValue: undefined,
        placeholder: '请选择',
        noDataText: '暂无数据',
        noMatchText: '无匹配数据',
        width: '100%',
        clearable: false,
        disabled: false,
        filterable: false,
        rules: rules,
        options: {
          remote: false,
          items: []
        }
      }
    },
    {
      name: '下拉多选',
      type: Array,
      component: 'multi-select',
      uuid: '',
      options: {
        label: '下拉多选',
        key: '',
        defaultValue: [],
        placeholder: '请选择',
        noDataText: '暂无数据',
        noMatchText: '无匹配数据',
        width: '100%',
        clearable: false,
        disabled: false,
        filterable: false,
        collapseTags: false,
        multipleLimit: 0,
        rules: rules,
        options: {
          remote: false,
          items: []
        }
      }
    },
    {
      name: '多选框',
      type: Array,
      component: 'checkbox',
      uuid: '',
      options: {
        label: '多选框',
        key: '',
        defaultValue: [],
        width: '100%',
        disabled: false,
        rules: rules,
        options: {
          remote: false,
          items: []
        }
      }
    },
    {
      name: '单选框',
      type: String,
      component: 'radio',
      uuid: '',
      options: {
        label: '单选框',
        key: '',
        defaultValue: '',
        width: '100%',
        disabled: false,
        rules: rules,
        options: {
          remote: false,
          items: []
        }
      }
    }
  ]

  const layouts = [
    {
      name: '对象布局',
      type: Object,
      component: 'object',
      uuid: '',
      options: {
        label: '对象布局',
        key: '',
        width: '100%',
        gutter: 0
      },
      items: []
    },
    {
      name: '卡片布局',
      type: Object,
      component: 'card',
      uuid: '',
      options: {
        label: '卡片布局',
        key: '',
        width: '100%',
        gutter: 0,
        shadow: 'always'
      },
      items: []
    }
  ]

  const formDesign = {
    name: '表单',
    type: Object,
    component: 'object',
    uuid: 'root',
    options: {
      labelWidth: '120px',
      labelPosition: 'right',
      size: 'medium',
      gutter: 0,
      hideRequiredAsterisk: false,
      statusIcon: false
    },
    items: []
  }

  return {
    basics: basics,
    layouts: layouts,
    formDesign: formDesign,
    selected: formDesign
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
    state.selected.options[key] = value
  },
  SET_SELECTED: (state, uuid) => {
    if (state.selected !== uuid) {
      state.selected = query([state.formDesign], uuid) || {}
    }
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
    commit('UPDATE_FORM_ITEMS', { uuid: 'root', items: formItems })
    commit('SET_SELECTED', newId)
  },
  removeFormItem({ commit, state }, uuid) {
    const formItems = deepClone(state.formDesign.items)
    remove(formItems, uuid)
    commit('UPDATE_FORM_ITEMS', { uuid: 'root', items: formItems })
    commit('SET_SELECTED', 'root')
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
