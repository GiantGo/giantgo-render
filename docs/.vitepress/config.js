//https://github.com/vuejs/vitepress/tree/master/docs
module.exports = {
  title: 'GiantGo Render',
  description: '基于vue3 element plus的快速表单生成器',
  base: '/giantgo-render/',
  lang: 'zh-CN',
  markdown: {
    lineNumbers: true
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
      { text: '教程', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: {
      // sidebar: "auto",
      '/guide/': getGuideSidebar(),
      '/api/': getApiSidebar(),
      '/': getGuideSidebar()
      // we don't need to do anything to index
      // because the default sidebar is created via page headings
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Chapter One', link: '/guide/getting-start' },
        { text: 'Chapter two', link: '/guide/two' }
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
