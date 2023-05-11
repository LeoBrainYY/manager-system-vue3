/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 10:57:50
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-10 05:28:40
 * @FilePath: \manager_vue3\manager_-system\src\service\main\system\system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import crayonRequest from "../../index";
import { IDataType } from '../../types'

export function getPageListData (url: string, queryInfo: any) {
  return crayonRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData (url: string) {
  return crayonRequest.delete<IDataType>({
    url: url
  })
}
