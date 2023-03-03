/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 10:35:56
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 11:48:22
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
      userCount: 0
    }
  },
  mutations: {
    changeUserList (state, userList: []) {
      state.userList = userList
    },
    changeUserCount (state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction ({ commit }, payload: any) {
      // console.log(payload)
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
