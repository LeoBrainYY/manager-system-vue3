/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 20:41:57
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-19 23:17:08
 * @FilePath: \manager_vue3\manager_-system\src\service\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import CrayonRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const crayonRequest = new CrayonRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('Request interception')

      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('Request failure interception')
      return error
    },
    responseInterceptors: (config) => {
      console.log('Response interception')
      return config
    },
    responseInterceptorCatch(error) {
      console.log('Response failure interception')
      return error
    },
  }
})

export default crayonRequest
