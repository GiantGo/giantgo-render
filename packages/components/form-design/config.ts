import type { FormDesign, Rules } from '@giantgo-render/tokens'

const rules: Rules = [{ required: false, message: '必填项', trigger: 'blur' }]

export const inputs: Array<FormDesign> = [
  {
    name: '输入框',
    component: 'input',
    uuid: '',
    options: {
      label: '输入框',
      key: '',
      defaultValue: '',
      rules,
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
    component: 'textarea',
    uuid: '',
    options: {
      label: '文本框',
      key: '',
      defaultValue: '',
      rules,
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
    component: 'number',
    uuid: '',
    options: {
      label: '数字输入框',
      key: '',
      defaultValue: 10,
      rules,
      width: '100%',
      min: 0,
      max: 100,
      hidden: false,
      disabled: false
    }
  }
]

export const pickers: Array<FormDesign> = [
  {
    name: '下拉单选',
    component: 'select',
    uuid: '',
    options: {
      label: '下拉单选',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: '',
      rules,
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
    component: 'multi-select',
    uuid: '',
    options: {
      label: '下拉多选',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: [],
      rules,
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
    component: 'cascader',
    uuid: '',
    options: {
      label: '级联选择器',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: [],
      rules,
      placeholder: '请选择',
      width: '100%',
      expandTrigger: 'click',
      hidden: false,
      clearable: false,
      disabled: false,
      filterable: false,
      collapseTags: false,
      multipleLimit: 0
    }
  },
  {
    name: '多选框',
    component: 'checkbox',
    uuid: '',
    options: {
      label: '多选框',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: [],
      rules,
      width: '100%',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '单选框',
    component: 'radio',
    uuid: '',
    options: {
      label: '单选框',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: '',
      rules,
      width: '100%',
      hidden: false,
      disabled: false,
      border: false
    }
  },
  {
    name: '时间选择器',
    component: 'time-picker',
    uuid: '',
    options: {
      label: '时间选择器',
      key: '',
      defaultValue: undefined,
      rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'HH:mm:ss',
      valueFormat: '',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '时间范围',
    component: 'time-range-picker',
    uuid: '',
    options: {
      label: '时间范围',
      key: '',
      defaultValue: [],
      rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'HH:mm:ss',
      valueFormat: '',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '日期选择器',
    component: 'date-picker',
    uuid: '',
    options: {
      label: '日期选择器',
      key: '',
      defaultValue: undefined,
      rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'YYYY-MM-DD',
      valueFormat: '',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '日期范围',
    component: 'date-range-picker',
    uuid: '',
    options: {
      label: '日期范围',
      key: '',
      defaultValue: [],
      rules,
      placeholder: '请选择',
      width: '100%',
      prefixIcon: 'el-icon-time',
      format: 'YYYY-MM-DD',
      valueFormat: '',
      hidden: false,
      clearable: false,
      disabled: false
    }
  },
  {
    name: '评分',
    component: 'rate',
    uuid: '',
    options: {
      label: '评分',
      key: '',
      defaultValue: 3,
      rules,
      width: '100%',
      max: 5,
      hidden: false,
      disabled: false,
      allowHalf: false
    }
  },
  {
    name: '滑块',
    component: 'slider',
    uuid: '',
    options: {
      label: '滑块',
      key: '',
      defaultValue: 10,
      rules,
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
    component: 'switch',
    uuid: '',
    options: {
      label: '开关',
      key: '',
      defaultValue: false,
      rules,
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
    component: 'color-picker',
    uuid: '',
    options: {
      label: '颜色选择器',
      key: '',
      defaultValue: '',
      rules,
      width: '100%',
      hidden: false,
      disabled: false,
      showAlpha: false
    }
  },
  {
    name: '文件上传',
    component: 'upload-file',
    uuid: '',
    options: {
      label: '文件上传',
      key: '',
      defaultValue: [],
      rules,
      width: '100%',
      uploadUrl: 'http://httpbin.org/post',
      uploadName: 'file',
      buttonText: '上传文件',
      fileSuffix: ['doc', 'docx', 'xls', 'xlsx', 'rar', 'zip'],
      uploadSize: '500KB',
      tip: '',
      uploadData: {},
      uploadHeaders: {},
      limit: 3,
      hidden: false,
      disabled: false,
      showToolTip: false,
      showFileList: true,
      multiple: false
    }
  },
  {
    name: '图片上传',
    component: 'upload-image',
    uuid: '',
    options: {
      label: '图片上传',
      key: '',
      defaultValue: [],
      rules,
      width: '100%',
      uploadUrl: 'http://httpbin.org/post',
      uploadName: 'file',
      imageSuffix: ['jpg', 'jpeg', 'png', 'gif'],
      uploadSize: '500KB',
      tip: '',
      uploadData: {},
      uploadHeaders: {},
      limit: 3,
      hidden: false,
      disabled: false,
      showToolTip: false,
      multiple: false
    }
  }
]

export const complexs: Array<FormDesign> = [
  {
    name: '富文本',
    component: 'rich-editor',
    uuid: '',
    options: {
      label: '富文本',
      key: '',
      defaultValue: '',
      rules,
      width: '100%',
      height: '300px',
      placeholder: '请输入',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '手写签名',
    component: 'signature',
    uuid: '',
    options: {
      label: '手写签名',
      key: '',
      defaultValue: '',
      rules,
      width: '100%',
      height: '100px',
      hidden: false,
      disabled: false,
      penColor: '#000000',
      backgroundColor: '#dddddd'
    }
  },
  {
    name: '省市县',
    component: 'area',
    uuid: '',
    options: {
      label: '省市县',
      key: '',
      defaultValue: [],
      rules,
      placeholder: '请选择',
      width: '100%',
      expandTrigger: 'click',
      hidden: false,
      clearable: false,
      disabled: false,
      filterable: false,
      collapseTags: false,
      multipleLimit: 0
    }
  }
]

export const matrixs: Array<FormDesign> = [
  {
    name: '矩阵单选',
    component: 'matrix-radio',
    uuid: '',
    options: {
      label: '矩阵单选',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      rowOptions: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: [],
      rules,
      width: '100%',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '矩阵多选',
    component: 'matrix-checkbox',
    uuid: '',
    options: {
      label: '矩阵多选',
      key: '',
      options: {
        type: 'static',
        remote: '',
        items: []
      },
      rowOptions: {
        type: 'static',
        remote: '',
        items: []
      },
      defaultValue: [],
      rules,
      width: '100%',
      hidden: false,
      disabled: false
    }
  }
]

export const objectLayout: FormDesign = {
  name: '子表单',
  component: 'object',
  uuid: '',
  options: {
    label: '子表单',
    key: '',
    defaultValue: {},
    width: '100%',
    hidden: false,
    gutter: 0
  },
  items: []
}

export const assists: Array<FormDesign> = [
  {
    name: '文字',
    component: 'label',
    uuid: '',
    options: {
      content: '文字',
      width: '100%',
      lineHeight: '40px',
      hidden: false
    }
  },
  {
    name: 'HTML',
    component: 'html',
    uuid: '',
    options: {
      richContent: '<strong>HTML</strong>',
      width: '100%',
      hidden: false
    }
  },
  {
    name: '分割线',
    component: 'divider',
    uuid: '',
    options: {
      width: '100%',
      hidden: false
    }
  }
]

export const layouts: Array<FormDesign> = [
  objectLayout,
  {
    name: '卡片布局',
    component: 'card',
    uuid: '',
    options: {
      label: '卡片布局',
      key: '',
      defaultValue: {},
      width: '100%',
      gutter: 0,
      shadow: 'always',
      padding: '20px 20px 20px 20px'
    },
    items: []
  },
  {
    name: '标签布局',
    component: 'tabs',
    uuid: '',
    options: {
      label: '标签布局',
      key: '',
      defaultValue: {},
      width: '100%',
      tabType: 'border-card',
      tabPosition: 'top'
    },
    items: []
  },
  {
    name: '列表',
    component: 'table',
    uuid: '',
    options: {
      label: '列表',
      key: '',
      defaultValue: [],
      width: '100%'
    },
    items: []
  }
]

export const form: FormDesign = {
  name: '表单',
  component: 'object',
  uuid: 'root',
  options: {
    labelWidth: '120px',
    labelPosition: 'right',
    size: 'default',
    gutter: 0,
    hideRequiredAsterisk: false,
    statusIcon: false,
    remotes: {}
  },
  items: []
}

export const optionKeyLabels: Record<string, string> = {
  activeColor: '打开时背景色',
  activeText: '打开时文字描述',
  allowHalf: '允许半选',
  backgroundColor: '背景颜色',
  border: '边框',
  buttonText: '按钮文字',
  clearable: '可清除',
  collapseTags: '多选合并显示',
  content: '内容',
  defaultValue: '默认值',
  disabled: '禁用',
  expandTrigger: '触发子菜单方式',
  fileSuffix: '上传文件类型',
  filterable: '可搜索',
  format: '显示格式',
  gutter: '行内间距',
  height: '组件高度',
  hidden: '隐藏',
  hideRequiredAsterisk: '隐藏必选标记',
  imageSuffix: '上传图片类型',
  inactiveColor: '关闭时背景色',
  inactiveText: '关闭时文字描述',
  inline: '是否行内表单',
  key: '字段名称(英文)',
  labelPosition: '对齐方式',
  labelWidth: '标签宽度',
  label: '标签',
  limit: '个数限制',
  lineHeight: '行高',
  max: '最大值',
  maxlength: '最大长度',
  min: '最小值',
  multipleLimit: '多选个数限制',
  multiple: '允许多选',
  noDataText: '无选项提示',
  noMatchText: '搜索无匹配提示',
  options: '选项',
  penColor: '笔颜色',
  padding: '内边距',
  placeholder: '占位文本',
  prefixIcon: '前缀图标',
  remotes: '数据源',
  richContent: 'HTML',
  rows: '文本域高度',
  rowOptions: '行',
  rules: '验证',
  shadow: '阴影显示',
  showAlpha: '透明度选择',
  showFileList: '显示上传列表',
  showInput: '显示输入框',
  showPassword: '密码框',
  showStops: '显示间断点',
  showToolTip: '显示提示',
  showWordLimit: '显示字数统计',
  size: '组件尺寸',
  statusIcon: '显示校验反馈图标',
  suffixIcon: '后缀图标',
  tabPosition: '选项卡位置',
  tabType: '选项卡样式',
  tip: '提示说明文字',
  uploadData: '上传额外参数',
  uploadHeaders: '上传请求头部',
  uploadName: '文件字段名',
  uploadSize: '上传大小限制',
  uploadUrl: '上传地址',
  valueFormat: '日期格式',
  width: '组件宽度'
}
