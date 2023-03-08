/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 17:31:35
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-02 16:53:46
 * @FilePath: \manager_vue3\manager_-system\src\base-ui\types\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type IFormType = 'input' | 'password' | 'datepicker' | 'select'

// base-ui type
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // select
  options?: any[]
  // sepecial attribute
  otherOptions?: any
}

// 合并组件传递的属性
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
