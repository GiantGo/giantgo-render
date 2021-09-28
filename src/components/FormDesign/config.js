export const rules = [{ required: false, message: '必填项', trigger: 'blur' }]

export const inputs = [
  {
    name: '输入框',
    type: String,
    component: 'input',
    uuid: '',
    options: {
      label: '输入框',
      key: '',
      defaultValue: '',
      rules: rules,
      width: '100%',
      placeholder: '请输入',
      prefixIcon: '',
      suffixIcon: '',
      hidden: false,
      clearable: false,
      disabled: false,
      showPassword: false,
      maxlength: 50,
      showWordLimit: true
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
      rules: rules,
      width: '100%',
      placeholder: '请输入内容',
      rows: 4,
      hidden: false,
      disabled: false,
      maxlength: 50,
      showWordLimit: true
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
      defaultValue: 10,
      rules: rules,
      width: '100%',
      min: 0,
      max: 100,
      hidden: false,
      disabled: false
    }
  }
]

export const pickers = [
  {
    name: '下拉单选',
    type: String,
    component: 'select',
    uuid: '',
    options: {
      label: '下拉单选',
      key: '',
      options: {
        remote: false,
        items: []
      },
      defaultValue: undefined,
      rules: rules,
      placeholder: '请选择',
      noDataText: '暂无数据',
      noMatchText: '无匹配数据',
      width: '100%',
      hidden: false,
      clearable: false,
      disabled: false,
      filterable: false
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
      options: {
        remote: false,
        items: []
      },
      defaultValue: [],
      rules: rules,
      placeholder: '请选择',
      noDataText: '暂无数据',
      noMatchText: '无匹配数据',
      width: '100%',
      hidden: false,
      clearable: false,
      disabled: false,
      filterable: false,
      collapseTags: false,
      multipleLimit: 0
    }
  },
  {
    name: '级联选择器',
    type: Array,
    component: 'cascader',
    uuid: '',
    options: {
      label: '级联选择器',
      key: '',
      options: {
        remote: false,
        items: []
      },
      defaultValue: [],
      rules: rules,
      placeholder: '请选择',
      width: '100%',
      expandTrigger: 'click',
      hidden: false,
      clearable: false,
      disabled: false,
      filterable: false,
      collapseTags: false,
      multipleLimit: 0,
      rules: rules
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
      options: {
        remote: false,
        items: []
      },
      defaultValue: [],
      rules: rules,
      width: '100%',
      hidden: false,
      disabled: false
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
      options: {
        remote: false,
        items: []
      },
      defaultValue: '',
      rules: rules,
      width: '100%',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '时间选择器',
    type: Date,
    component: 'time-picker',
    uuid: '',
    options: {
      label: '时间选择器',
      key: '',
      defaultValue: undefined,
      rules: rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'HH:mm:ss',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '时间范围',
    type: Array,
    component: 'time-range-picker',
    uuid: '',
    options: {
      label: '时间范围',
      key: '',
      defaultValue: [],
      rules: rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'HH:mm:ss',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '日期选择器',
    type: Date,
    component: 'date-picker',
    uuid: '',
    options: {
      label: '日期选择器',
      key: '',
      defaultValue: undefined,
      rules: rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'YYYY-MM-DD',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '日期范围',
    type: Array,
    component: 'date-range-picker',
    uuid: '',
    options: {
      label: '日期范围',
      key: '',
      defaultValue: [],
      rules: rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'YYYY-MM-DD',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '评分',
    type: Number,
    component: 'rate',
    uuid: '',
    options: {
      label: '评分',
      key: '',
      defaultValue: 3,
      rules: rules,
      width: '100%',
      max: 5,
      hidden: false,
      disabled: false,
      allowHalf: false
    }
  },
  {
    name: '滑块',
    type: Number,
    component: 'slider',
    uuid: '',
    options: {
      label: '滑块',
      key: '',
      defaultValue: 10,
      rules: rules,
      width: '100%',
      min: 0,
      max: 100,
      step: 1,
      hidden: false,
      disabled: false,
      showStops: false,
      showToolTip: true,
      showInput: false
    }
  },
  {
    name: '开关',
    type: Boolean,
    component: 'switch',
    uuid: '',
    options: {
      label: '开关',
      key: '',
      defaultValue: false,
      rules: rules,
      width: '100%',
      hidden: false,
      disabled: false,
      activeText: '',
      inactiveText: '',
      activeColor: '#409EFF',
      inactiveColor: '#C0CCDA'
    }
  },
  {
    name: '颜色选择器',
    type: String,
    component: 'color-picker',
    uuid: '',
    options: {
      label: '颜色选择器',
      key: '',
      defaultValue: '',
      rules: rules,
      width: '100%',
      hidden: false,
      disabled: false,
      showAlpha: false
    }
  },
  {
    name: '文件上传',
    type: Array,
    component: 'upload',
    uuid: '',
    options: {
      label: '文件上传',
      key: '',
      defaultValue: [],
      rules: rules,
      width: '100%',
      uploadUrl: 'https://jsonplaceholder.typicode.com/posts/',
      uploadName: 'file',
      buttonText: '上传文件',
      uploadSize: '500KB',
      tip: '',
      uploadData: {},
      uploadHeaders: {},
      limit: 3,
      hidden: false,
      disabled: false,
      showToolTip: false,
      showFileList: false,
      multiple: false
    }
  }
]

export const complexs = [
  {
    name: '富文本编辑器',
    type: String,
    component: 'editor',
    uuid: '',
    options: {
      label: '富文本编辑器',
      key: '',
      defaultValue: '',
      rules: rules,
      width: '100%',
      placeholder: '请输入',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '列表',
    type: Array,
    component: 'table',
    uuid: '',
    options: {
      label: '列表',
      key: '',
      width: '100%'
    }
  }
]

export const objectLayout = {
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
}

export const layouts = [
  objectLayout,
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
      shadow: 'always',
      padding: '20px 20px 0px 0px'
    },
    items: []
  },
  {
    name: '标签布局',
    type: Object,
    component: 'tabs',
    uuid: '',
    options: {
      label: '标签布局',
      key: '',
      width: '100%',
      tabType: 'border-card',
      tabPosition: 'top'
    },
    items: []
  }
]

export const form = {
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
