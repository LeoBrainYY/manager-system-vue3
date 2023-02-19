/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 21:58:26
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-19 22:00:24
 * @FilePath: \manager_vue3\manager_-system\src\service\request\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CrayonRequestInterceptors {
  // 这里config的类型可以看this.instance.interceptors.request.ues()中的use类型
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 相当于扩展了原来AxiosRequestConfig的类型
export interface CrayonRequestConfig extends AxiosRequestConfig {
  interceptors?: CrayonRequestInterceptors
}
// export {}
