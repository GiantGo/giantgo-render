//https://github.com/vuejs/vitepress/tree/master/docs
module.exports = {
  title: 'GiantGo Render',
  description: '基于vue3 element plus的快速表单生成器',
  base: '/giantgo-render/',
  lang: 'zh-CN',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    docsDir: 'docs',
    // editLinks: true,
    editLinkText: 'Edit this page on GitHub',

    lastUpdated: 'Last Updated',
    // repo: 'vuejs/vitepress',
    displayAllHeaders: true, // Default: false
    activeHeaderLinks: false, // Default: true
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/' }
      // { text: 'API', link: '/api/' }
    ],
    sidebar: {
      // sidebar: "auto",
      '/guide/': getGuideSidebar(),
      // '/api/': getApiSidebar(),
      '/': getGuideSidebar()
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '开始',
      children: [
        { text: '介绍', link: '/guide/' },
        { text: '安装', link: '/guide/start' },
        { text: '源码', link: '/guide/source' }
      ]
    },
    {
      text: '组件',
      children: [
        { text: 'form-design', link: '/component/design' },
        { text: 'form-render', link: '/component/render' }
      ]
    }
  ]
}

function getApiSidebar() {
  return [
    {
      text: 'API',
      children: [{ text: 'API', link: '/api/' }]
    }
  ]
}
