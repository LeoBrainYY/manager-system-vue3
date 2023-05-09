/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-21 19:01:53
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-09 02:40:58
 * @FilePath: \manager_vue3\manager_-system\src\store\login\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ILoginState {
  token: string
  userInfo: any,
  userMenus: any,
  // 按钮权限
  permissions: string[]
}
