/*
 * @Description: 集成vue-router
 * @Author: ZL
 * @Date: 2021-07-01 14:18:58
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 13:45:57
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/signUp/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
