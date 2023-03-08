/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-26 21:22:47
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-08 19:54:29
 * @FilePath: \manager_vue3\manager_-system\src\views\main\system\user\config\search.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from "@/base-ui/form"

export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: 'Start Time',
        endPlaceholder: 'End Time',
        type: 'daterange'
      }
    }
  ],
  // 名称宽度
  labelWidth: '120px'
}
