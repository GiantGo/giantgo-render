## 安装

## 搭建一个 Vite 项目

使用 NPM:

```
$ npm init vite@latest
```

使用 Yarn:

```
$ yarn create vite
```

使用 PNPM:

```
$ pnpm create vite
```
然后按照提示操作即可！

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

```
# npm 6.x

npm init vite@latest my-vue-app --template vue

# npm 7+, 需要额外的双横线：

npm init vite@latest my-vue-app -- --template vue

# yarn

yarn create vite my-vue-app --template vue

# pnpm

pnpm create vite my-vue-app -- --template vue
```

## 安装 giantgo-render

giantgo-render 依赖 Element plus，不要忘记安装 element-plus

```
# 使用yarn
yarn add giantgo-render

# 使用npm
npm i giantgo-render --save

# 使用pnpm
pnpm i giantgo-render --save
```

## 引入组件

```
// 在main.js引入

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import GiantgoRender from 'giantgo-render'

import 'element-plus/dist/index.css'
import 'giantgo-render/dist/style.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(GiantgoRender)

app.mount('#app')

```

## 使用组件

```
<template>
  <form-design />
</template>
```