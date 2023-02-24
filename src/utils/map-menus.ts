/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-23 10:05:27
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-23 13:16:38
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
  // console.log(routeFiles)
  // 固定写法 获取所有文件路径
  routeFiles.keys().forEach(key => {
    // console.log(key)
    // ./analysis/dashboard/dashboard.ts
    // map-menus.ts?3d1b:22 ./analysis/overview/overview.ts
    // map-menus.ts?3d1b:22 ./product/category/category.ts
    // map-menus.ts?3d1b:22 ./product/goods/goods.ts
    // map-menus.ts?3d1b:22 ./story/chat/chat.ts
    // map-menus.ts?3d1b:22 ./story/list/list.ts
    // map-menus.ts?3d1b:22 ./system/department/department.ts
    // map-menus.ts?3d1b:22 ./system/menu/menu.ts
    // map-menus.ts?3d1b:22 ./system/role/role.ts
    // map-menus.ts?3d1b:22 ./system/user/user.ts
    // 使用split把前面的.去掉 拼接完整路径
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)

  })
  console.log(allRoutes)

  // 2.根据菜单获取需要添加的routes
  // userMenus: 只有单type===2的时候映射页面
  // type === 1 -> children -> type === 1
  // type ===2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find(item => {
          return item.path === menu.url
        })
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
