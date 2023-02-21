/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 12:24:55
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-21 19:05:36
 * @FilePath: \manager_vue3\manager_-system\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'

import { IRootState } from './types'

import login from './login/login'
const store = createStore<IRootState>({
  state () {
    return {
      name: 'xiaoxin',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
