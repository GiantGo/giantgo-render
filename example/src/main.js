import { createApp } from 'vue'
import App from './App.vue'

// import ElementPlus from 'element-plus'
import GiantgoRender from 'giantgo-render'

// import 'element-plus/dist/index.css'
import 'giantgo-render/dist/style.css'

const app = createApp(App)

// app.use(ElementPlus)
app.use(GiantgoRender)

app.mount('#app')
