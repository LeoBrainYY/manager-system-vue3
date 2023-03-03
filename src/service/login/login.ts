/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-22 09:54:58
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 11:31:20
 * @FilePath: \manager_vue3\manager_-system\src\service\login\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import crayonRequest from "../index"

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // users/id
  UserMenus = '/role/' // role/1/menu
}
export function accountLoginRequest (accout: IAccount) {
  return crayonRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: accout
  })
}

export function requestUserInfoById (id: number) {
  return crayonRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId (id: number) {
  return crayonRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
