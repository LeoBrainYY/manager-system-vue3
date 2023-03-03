/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-21 19:00:05
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 10:48:52
 * @FilePath: \manager_vue3\manager_-system\src\store\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string,
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
