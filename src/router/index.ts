/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 12:11:34
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-22 14:05:07
 * @FilePath: \manager_vue3\manager_-system\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from "vue-router"
// 这里的RouteRecordRaw类型是从createRouter(函数里面已经定义好get到的)
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
