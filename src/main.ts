/*
 * @Description: main.ts入口文件
 * @Author: ZL
 * @Date: 2021-07-01 14:07:59
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-01 16:00:40
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import './style/index.css'

createApp(App).use(router).use(store).mount('#app')
