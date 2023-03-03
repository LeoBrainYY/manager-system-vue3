/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-22 09:56:43
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 11:30:44
 * @FilePath: \manager_vue3\manager_-system\src\service\login\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IAccount {
  name: string
  password: string
}

// 登录时data的数据类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}
