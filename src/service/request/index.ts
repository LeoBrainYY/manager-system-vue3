/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 20:49:19
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 11:27:12
 * @FilePath: \manager_vue3\manager_-system\src\service\request\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
// 这种类型都是看第三方库源码定义的类型得出
// ctrl + Left mouse button
import type { AxiosInstance } from 'axios'
import type { CrayonRequestInterceptors, CrayonRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true

class CrayonRequest {
  // 每次传入不同的配置 都会有一个新的实例对象
  instance: AxiosInstance
  interceptors?: CrayonRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor (config: CrayonRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING // undefined 或者 null 默认值为true
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
        // console.log('All instance Obj have this interceptor')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loading data...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      err => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        // console.log('All instance Obj have this interceptor')
        this.loading?.close()
        return res.data
      },
      err => {
        this.loading?.close()
        return err
      }
    )
  }

  // 单独请求拦截
  request<T = any> (config: CrayonRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 同一个实例的部分请求的拦截器
      // 部分请求的请求拦截
      // 单个请求对config的处理
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config) // 把conifg处理之后返回config
      }

      // 判断是否需要显示loading
      if (config.showLoading === false) {
        // 先执行这里 然后在执行所有实例都有的拦截器
        // console.log('test execution sequence')

        this.showLoading = false
      }

      this.instance
        .request<any, T>(config)
        // 这里的res是T类型 本来和下面的类型是不兼容的 在request请求CrayonRequestConfig中传入T的类型
        // 让下面成了T类型
        .then(res => {
          // 处理部分请求的响应拦截
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res) // responseInterceptors原本类型是AxiosResponse类型
          }
          console.log(res, 'test')

          // 重置showLoading
          this.showLoading = DEFAULT_LOADING

          // 将请求结果resolve返回出去
          resolve(res)
      }).catch(err => {
        this.showLoading = DEFAULT_LOADING
        reject(err)
        return err
      })
    })
  }

  get<T = any> (config: CrayonRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any> (config: CrayonRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any> (config: CrayonRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any> (config: CrayonRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default CrayonRequest
