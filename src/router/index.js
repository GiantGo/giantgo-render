import { createRouter, createWebHashHistory } from 'vue-router'

const modulesFiles = import.meta.globEager('./modules/*.js')

export const moduleRoutes = Object.values(modulesFiles).reduce(
  (a, b) => a.concat(b.default),
  [{ path: '/:catchAll(.*)', redirect: '/404', hidden: true }]
)

export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue')
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router
