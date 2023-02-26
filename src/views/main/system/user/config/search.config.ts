import { IForm } from "@/base-ui/form"

export const formConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: 'ID',
      placeholder: '请输入ID'
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: 'basketball', value: 'basketball' },
        { title: 'football', value: 'football' }
      ]
    },
    {
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
