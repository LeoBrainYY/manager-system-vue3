/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-23 10:05:27
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-23 10:13:00
 * @FilePath: \manager_vue3\manager_-system\src\utils\map-menus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes (userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // require.context (属于Webpack的一个函数)
  // params 1 -> 路径
  // 2 -> 是否递归查询所有文件
  // 3 -> 匹配文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach(key => {
    console.log(key)

  })
  // 2.根据菜单获取需要添加的routes

  return routes
}
