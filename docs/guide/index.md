## 介绍

基于 vue3+vite2+element-plus 实现的表单设计器（未来有精力会增加列表和建站功能），通过可视化拖拽生成表单，支持 JS 表达式实现组件复杂联动。

本人写代码非常有洁癖，非常认同代码是给人看的，顺便可以在机器上运行 :smile:，有兴趣可以 fork，并留下您宝贵的:star: 你会发现二次开发也很爽:smile:

- 【[预览地址](https://giantgo.github.io/giantgo-render/example)】
- 【[项目地址](https://github.com/GiantGo/giantgo-render)】

## 特性

- 可视化拖拽配置
- 20+种表单组件
- 富文本编辑器
- 多种布局组件
- 提供表单预览，json 编辑，清空，撤销，重做等功能
- 表单自定义验证

## 组件

- FormDesign 表单配置，可视化操作生成表单 json
- FormRender 通过 FormDesign 生成的 json 渲染表单

## 安装

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

import giantgo-render from 'giantgo-render'
import 'giantgo-render/dist/style.css'
app.use(GiantgoRender)
```

## 使用组件

```
<template>
  <form-design />
</template>
```

- 【[参考 example](https://github.com/GiantGo/giantgo-render/tree/master/example)】

## 捐赠

如果 giantgo-render 对您有帮助，please buy me a coffee :smile:

## License

MIT Copyright (c) 2019-present siler
