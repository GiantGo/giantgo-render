import{_ as e,y as n,x as a,W as t}from"./plugin-vue_export-helper.c15f2d1f.js";const u='{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u642D\u5EFA\u4E00\u4E2A Vite \u9879\u76EE","slug":"\u642D\u5EFA\u4E00\u4E2A-vite-\u9879\u76EE"},{"level":2,"title":"\u5B89\u88C5 giantgo-render","slug":"\u5B89\u88C5-giantgo-render"},{"level":2,"title":"\u5F15\u5165\u7EC4\u4EF6","slug":"\u5F15\u5165\u7EC4\u4EF6"},{"level":2,"title":"\u4F7F\u7528\u7EC4\u4EF6","slug":"\u4F7F\u7528\u7EC4\u4EF6"}],"relativePath":"guide/start.md","lastUpdated":1646015212122}',r={},p=t(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h2 id="\u642D\u5EFA\u4E00\u4E2A-vite-\u9879\u76EE" tabindex="-1">\u642D\u5EFA\u4E00\u4E2A Vite \u9879\u76EE <a class="header-anchor" href="#\u642D\u5EFA\u4E00\u4E2A-vite-\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 NPM:</p><div class="language-"><pre><code>$ npm init vite@latest
</code></pre></div><p>\u4F7F\u7528 Yarn:</p><div class="language-"><pre><code>$ yarn create vite
</code></pre></div><p>\u4F7F\u7528 PNPM:</p><div class="language-"><pre><code>$ pnpm create vite
</code></pre></div><p>\u7136\u540E\u6309\u7167\u63D0\u793A\u64CD\u4F5C\u5373\u53EF\uFF01</p><p>\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7\u9644\u52A0\u7684\u547D\u4EE4\u884C\u9009\u9879\u76F4\u63A5\u6307\u5B9A\u9879\u76EE\u540D\u79F0\u548C\u4F60\u60F3\u8981\u4F7F\u7528\u7684\u6A21\u677F\u3002\u4F8B\u5982\uFF0C\u8981\u6784\u5EFA\u4E00\u4E2A Vite + Vue \u9879\u76EE\uFF0C\u8FD0\u884C:</p><div class="language-"><pre><code># npm 6.x

npm init vite@latest my-vue-app --template vue

# npm 7+, \u9700\u8981\u989D\u5916\u7684\u53CC\u6A2A\u7EBF\uFF1A

npm init vite@latest my-vue-app -- --template vue

# yarn

yarn create vite my-vue-app --template vue

# pnpm

pnpm create vite my-vue-app -- --template vue
</code></pre></div><h2 id="\u5B89\u88C5-giantgo-render" tabindex="-1">\u5B89\u88C5 giantgo-render <a class="header-anchor" href="#\u5B89\u88C5-giantgo-render" aria-hidden="true">#</a></h2><p>giantgo-render \u4F9D\u8D56 Element plus\uFF0C\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5 element-plus</p><div class="language-"><pre><code># \u4F7F\u7528yarn
yarn add giantgo-render

# \u4F7F\u7528npm
npm i giantgo-render --save

# \u4F7F\u7528pnpm
pnpm i giantgo-render --save
</code></pre></div><h2 id="\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><pre><code>// \u5728main.js\u5F15\u5165

import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

import ElementPlus from &#39;element-plus&#39;
import GiantgoRender from &#39;giantgo-render&#39;

import &#39;element-plus/dist/index.css&#39;
import &#39;giantgo-render/dist/style.css&#39;

const app = createApp(App)

app.use(ElementPlus)
app.use(GiantgoRender)

app.mount(&#39;#app&#39;)

</code></pre></div><h2 id="\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;template&gt;
  &lt;form-design /&gt;
&lt;/template&gt;
</code></pre></div>`,18),i=[p];function d(s,l,o,c,g,m){return a(),n("div",null,i)}var h=e(r,[["render",d]]);export{u as __pageData,h as default};
