/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 12:24:55
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-12 06:30:22
 * @FilePath: \manager_vue3\manager_-system\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import login from './login/login'
import system from './main/system/system'

import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state () {
    return {
      name: 'xiaoxin',
      age: 18,
      // 新建用户选择角色和部门的数据
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment (state, list) {
      state.entireDepartment = list
    },
    changeEntireRole (state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction ({ commit }) {
      // 1. 请求部门和角色数据
      // list: departmentList -->> 起别名
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = roleResult.data

      // 2. 保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore () {
  store.dispatch('login/loadLocalLogin')
  // 执行获取新建用户时选择部门的数据 的函数
  store.dispatch('getInitialDataAction')
}

export function useStore (): Store<IStoreType> {
  return useVuexStore()
}

export default store
