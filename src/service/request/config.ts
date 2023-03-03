/*
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 21:03:21
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 11:08:12
 * @FilePath: \manager_vue3\manager_-system\src\service\request\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/prod'
}

export { BASE_URL, TIME_OUT }
