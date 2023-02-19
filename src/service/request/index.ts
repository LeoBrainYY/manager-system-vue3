/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 20:49:19
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-19 23:07:43
 * @FilePath: \manager_vue3\manager_-system\src\service\request\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
// 这种类型都是看第三方库源码定义的类型得出
// ctrl + Left mouse button
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { CrayonRequestInterceptors, CrayonRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class CrayonRequest {
  // 每次传入不同的配置 都会有一个新的实例对象
  instance: AxiosInstance
  interceptors?: CrayonRequestInterceptors
  loading?: ILoadingInstance

  constructor (config: CrayonRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // config中取出的拦截器 即对应的创建的实例的拦截器
    // 同一个实例的所有请求
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      config => {
        console.log('All instance Obj have this interceptor')
        this.loading = ElLoading.service({
          lock: true,
          text: 'loading data...',
          background: 'rgba(0, 0, 0, 0.5)'
        })
        return config
      },
      err => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        console.log('All instance Obj have this interceptor')
        this.loading?.close()
        return res
      },
      err => {
        this.loading?.close()
        return err
      }
    )
  }


  request (config: CrayonRequestConfig): void {
    // 同一个实例的部分请求的拦截器
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config) // 把conifg处理之后返回config
    }

    this.instance.request(config).then(res => {
      // 处理部分请求的响应拦截
      if (config.interceptors?.responseInterceptors) {
        res = config.interceptors.responseInterceptors(res)
      }
      console.log(res, 'test')
    })
  }
}

export default CrayonRequest
