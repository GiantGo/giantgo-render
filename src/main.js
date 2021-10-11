import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './styles/index.scss' // global css
import FormDesign from './components/FormDesign/index.js'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, { size: 'medium', zIndex: 3000, locale })
app.use(FormDesign)

app.mount('#app')
