/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-23 10:05:27
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-02 15:19:26
 * @FilePath: \manager_vue3\manager_-system\src\utils\map-menus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

// 保留第一次循环下来的菜单url
// 为了当url只有/main时 让其匹配到到第一个页面
let firstMenu: any = null

// 处理动态路由 根据后端返回的url菜单注册相对应路由
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
  // console.log(allRoutes)

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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 面包屑处理
export function pathMapToBreadCrumb (userMenus: any[], currentPath: string) {
  const  breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}


// 处理刷新页面左侧栏点击之后 通过当前页面的url去获取相对应的那一栏的ID 刷新之后左侧菜单栏就是动态的 保持原来位置
export function pathMapToMenu (
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      // menu.children如果为空 对空数组进行遍历
      const getMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (getMenu) {
        // 第一层
        // breadcrumbs?.push({ name: menu.name, path: menu.url })
        breadcrumbs?.push({ name: menu.name })
        // 第二层
        breadcrumbs?.push({ name: getMenu.name })
        return getMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// // 面包屑处理
// export function pathMapToBreadCrumb (userMenus: any[], currentPath: string) {
//   const  breadcrumbs: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       // menu.children如果为空 对空数组进行遍历
//       const getMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (getMenu) {
//         // 第一层
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         // 第二层
//         breadcrumbs.push({ name: getMenu.name, path: getMenu.url })
//         return getMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }

//   return breadcrumbs
// }


// // 处理刷新页面左侧栏点击之后 通过当前页面的url去获取相对应的那一栏的ID 刷新之后左侧菜单栏就是动态的 保持原来位置
// export function pathMapToMenu (userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       // menu.children如果为空 对空数组进行遍历
//       const getMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (getMenu) {
//         return getMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }

export { firstMenu }
