import type { Method } from 'axios'
import type { ComputedRef } from 'vue'

export type Interpolation<T> = {
  [P in keyof T]: T[P] extends (string | number | boolean) | undefined ? T[P] | ComputedRef<T[P]> : T[P]
}

export type KeyValue = {
  key: string
  value: string
}

export type Option = {
  label: string
  value: string
}

export type RequiredRule = {
  required: boolean
  message: string
  trigger: string
}

export type PatternRule = {
  pattern: string
  message: string
  trigger: string
}

export type Rules = [required: RequiredRule, ...prop: Array<PatternRule>]

export interface Remote {
  title: string
  url: string
  method: Method
  headers: Array<KeyValue>
  params: Array<KeyValue>
  data: Array<KeyValue>
  requestHandler: string
  responseHandler: string
  errorHandler: string
}

export interface Options {
  type: string
  remote: string
  items: Array<Option>
}

export interface FormDesignOption {
  [propName: string]: any
  activeColor?: string
  activeText?: string
  allowHalf?: boolean
  backgroundColor?: string
  border?: boolean
  buttonText?: string
  clearable?: boolean
  collapseTags?: boolean
  content?: string
  defaultValue?: any
  disabled?: boolean
  expandTrigger?: string
  fileSuffix?: Array<string>
  filterable?: boolean
  format?: string
  gutter?: number
  height?: string
  hidden?: boolean
  hideRequiredAsterisk?: boolean
  imageSuffix?: Array<string>
  inactiveColor?: string
  inactiveText?: string
  inline?: boolean
  key?: string
  labelPosition?: 'left' | 'right' | 'top'
  labelWidth?: string
  label?: string
  limit?: number
  lineHeight?: string
  max?: number
  maxlength?: number
  min?: number
  multipleLimit?: number
  multiple?: boolean
  noDataText?: string
  noMatchText?: string
  options?: Options
  padding?: string
  penColor?: string
  placeholder?: string
  prefixIcon?: string
  remotes?: Record<string, Remote>
  richContent?: string
  rows?: number
  rules?: Rules
  shadow?: string
  showAlpha?: boolean
  showFileList?: boolean
  showInput?: boolean
  showPassword?: boolean
  showStops?: boolean
  showToolTip?: boolean
  showWordLimit?: boolean
  size?: '' | 'default' | 'small' | 'large'
  statusIcon?: boolean
  step?: number
  suffixIcon?: string
  tabPosition?: string
  tabType?: string
  tip?: string
  uploadData?: any
  uploadHeaders?: Record<string, string>
  uploadName?: string
  uploadSize?: string
  uploadUrl?: string
  width?: string
}

export interface FormDesign {
  name: string
  component: string
  uuid: string
  options: FormDesignOption
  items?: Array<FormDesign>
}

export interface FormDesignInterpolation {
  name: string
  component: string
  uuid: string
  options: Interpolation<FormDesignOption>
  items?: Array<FormDesign>
}

export interface Group {
  name: string
  components: Array<FormDesign>
  order: number
}
