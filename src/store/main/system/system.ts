/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 10:35:56
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-10 23:32:38
 * @FilePath: \manager_vue3\manager_-system\src\store\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * dispatch --> action
 * 1. 通过getters获取到数据
 * 2. actions执行mutations中的函数
 * 3. 把数据放到state中
 */
import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageListData, deletePageData } from '@/service/main/system/system'
import { ElMessage } from 'element-plus'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state () {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList (state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount (state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList (state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount (state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList (state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount (state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuCount (state, menuCount: number) {
      state.menuCount = menuCount
    },
    changeMenuList (state, menuList: any[]) {
      state.menuList = menuList
    }
  },
  getters: {
    // 间接获取state的数据
    pageListData (state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListCount (state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction ({ commit }, payload: any) {
      // 根据页面名获取pageUrl
      const pageName = payload.pageName
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      const pageUrl = `/${pageName}/list`

      // send request
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 将数据存储到state
      const { list, totalCount } = pageResult.data
      console.log(list, '获取到的数据')
      // console.log(totalCount)

      const changePageName = (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'user':
      //     commit(`changeUsersList`, list)
      //     commit(`changeUserCount`, totalCount)
      //     break
      //   case 'role':
      //     commit(`changeRoleList`, list)
      //     commit(`changeRoleCount`, totalCount)
      //     break
      // }
    },
    async deletePageDataAction (context, payload: any) {
      // 需要两个参数获取删除的页面 和 id
      // 1. pageName -> /users/id
      // 2. id -> /users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 执行删除函数(参数为url)
      const res = await deletePageData(pageUrl)
      // console.log(res, 'res')
      if (res.code === -1002) {
        ElMessage({
          message: res.data,
          type: 'warning'
        })
      } else {
        ElMessage({
          message: 'delete successful',
          type: 'success'
        })
      }

      // 重新请求数据
      context.dispatch('getPageListAction', {
        pageName: pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
