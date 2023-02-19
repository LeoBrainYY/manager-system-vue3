import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// import './service/axios_demo'
import crayonRequest from './service'

import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'

import App from './App.vue'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

crayonRequest.request({
  url: '/home/multidata',
  method: 'GET',
  // 测试每一个单独的请求自己的拦截
  interceptors: {
    requestInterceptors: (config) => {
      console.log('seperate request config interceptions')
      return config
    },
    responseInterceptors: (res) => {
      console.log('seperate response res interceptions')
      return res
    }
  }
})

crayonRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
