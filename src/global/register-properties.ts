/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 16:37:06
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-05 22:49:31
 * @FilePath: \manager_vue3\manager_-system\src\global\register-properties.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue'

import { formatUtcString } from '@/utils/data-format'

export default function registerProperties (app: App) {
  // 全局不用导入 就可以调用的函数
  app.config.globalProperties.$filters = {
    formatTime (value: string) {
      const result = formatUtcString(value)
      return result
    }
  }
}
