/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-21 18:56:30
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-23 13:20:51
 * @FilePath: \manager_vue3\manager_-system\src\store\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from "vuex"

import { accountLoginRequest,
         requestUserInfoById,
         requestUserMenuByRoleId } from "@/service/login/login"
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from "@/router"

import { IAccount } from "@/service/login/type"
import { IRootState } from "../types"
import { ILoginState } from "./types"

//这里Module的参数是必传的 <S, R>
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state () {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  // 修改stat的唯一方式 就是通过mutations
  mutations: {
    changeToken (state, token: string) {
      state.token = token
    },
    changeUserInfo (state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus (state, userMenus: any) {
      state.userMenus = userMenus

      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      console.log(routes)

      routes.forEach(item => {
        // 将routes => router.main.children
        router.addRoute('main', item)
      })
    }
  },
  actions: {
    async accountLoginAction ({ commit }, payload: IAccount) {
      console.log('execution action', payload)
      // 1. execution login
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      // 执行mutations中的changeToken函数 把token保存在state中
      commit('changeToken', token)
      localCache.setCache('token', token)
      console.log(loginResult.data.id, loginResult.data.name)

      // 2. request user info
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      // console.log(userInfo)
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3. request user menu
      const userMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // console.log(userMenus, 'userMenus')

      // 4. jump to the first page
      router.push('/main')

    },
    // 解决方案: Vuex刷新之后数据就会清空
    loadLocalLogin ({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (token) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
