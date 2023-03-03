/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-26 21:22:47
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-02 16:56:54
 * @FilePath: \manager_vue3\manager_-system\src\views\main\system\user\config\search.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IForm } from "@/base-ui/form"

export const formConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'ID',
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: 'basketball', value: 'basketball' },
        { title: 'football', value: 'football' }
      ]
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
  labelWidth: '120px',
  // 每一个单个表单框的间隔
  itemStyle: {
    padding: '10px 35px'
  },
  // 放大缩小浏览器 表单部分的布局
  colLayout: {
    span: 8
  }
}
