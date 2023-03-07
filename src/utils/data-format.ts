/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 16:55:12
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-05 22:50:18
 * @FilePath: \manager_vue3\manager_-system\src\utils\data-format.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// utc时间格式转化扩展
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 把格式为uct的时间格式进行转换
export function formatUtcString (utcString: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
