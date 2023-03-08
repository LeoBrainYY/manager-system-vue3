/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 10:35:56
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-08 19:01:38
 * @FilePath: \manager_vue3\manager_-system\src\store\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state () {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList (state, userList: []) {
      state.userList = userList
    },
    changeUserCount (state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList (state, roleList: []) {
      state.roleList = roleList
    },
    changeRoleCount (state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    // 间接获取state的数据
    pageListData (state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getPageListAction ({ commit }, payload: any) {
      // 根据页面名获取pageUrl
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }
      // const pageUrl = `${pageName}/list`

      // send request
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 将数据存储到state
      const { list, totalCount } = pageResult.data

      switch (pageName) {
        case 'user':
          commit(`changeUserList`, list)
          commit(`changeUserCount`, totalCount)
          break
        case 'role':
          commit(`changeRoleList`, list)
          commit(`changeRoleCount`, totalCount)
          break
      }
    }
  }
}

export default systemModule
