/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-11-02 16:58:13
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-05 23:01:00
 * @FilePath: \manager_vue3\manager_-system\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
import crayonRequest from './service'

import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'
import { setupStore } from './store'

import registerProperties from './global/index'

import App from './App.vue'
const app = createApp(App)
setupStore()
// use(router)会去匹配routes 所以应该把注册写在前面
app.use(router)
app.use(store)
app.use(ElementPlus)
// 解决方案: Vuex刷新之后数据就会清空
// setupStore()
// 注册全局函数(不用导入即可使用)
app.use(registerProperties)

app.mount('#app')

// crayonRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   // 测试每一个单独的请求自己的拦截
//   interceptors: {
//     requestInterceptors: (config) => {
//       console.log('seperate request config interceptions')
//       return config
//     },
//     responseInterceptors: (res) => {
//       console.log('seperate response res interceptions')
//       return res
//     }
//   }
// })



// interface DataType {
//   data: any,
//   returnCode: string,
//   success: boolean
// }

// crayonRequest.get<DataType>({
//   url: '/home/multidata',
//   showLoading: false
// })
// .then(res => {
//   console.log(res)
//   console.log(res.returnCode)
//   console.log(res.success)

// })


// setTimeout(() => {
//   crayonRequest.request({
//     url: '/home/multidata',
//     method: 'GET'
//   })
// }, 3000)
