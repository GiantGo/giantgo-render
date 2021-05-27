import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import './styles/index.scss' // global css
import router from './router'
import store from './store/index.js'
import {
  ElButton,
  ElButtonGroup,
  ElCard,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElDatePicker,
  ElDialog,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElInputNumber,
  ElLink,
  ElOption,
  ElPagination,
  ElRadio,
  ElRow,
  ElSelect,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTooltip,
  ElTree,
  ElUpload,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
} from 'element-plus'

const components = [
  ElButton,
  ElButtonGroup,
  ElCard,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElDatePicker,
  ElDialog,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElInputNumber,
  ElLink,
  ElOption,
  ElPagination,
  ElRadio,
  ElRow,
  ElSelect,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTooltip,
  ElTree,
  ElUpload
]

const plugins = [ElLoading, ElMessage, ElMessageBox, ElNotification]

const app = createApp(App)

app.use(router)
app.use(store)

components.forEach((component) => {
  app.component(component.name, component)
})

plugins.forEach((plugin) => {
  app.use(plugin)
})

app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }

app.mount('#app')
