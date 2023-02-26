<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 00:09:26
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-02-26 21:25:41
 * @FilePath: \manager_vue3\manager_-system\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user">
    <div class="search">
      <!-- <crayon-form
        class="crayon-form"
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
        :colLayout="colLayout"></crayon-form> -->
        <!-- 注意配置的写法 v-bind -->
        <crayon-form v-bind="formConfig"></crayon-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CrayonForm, { IForm } from '@/base-ui/form'
import { formConfig } from './config/search.config'
// import CrayonForm, { IFormItem, IForm } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    CrayonForm
  },
  setup() {
    // const formItems: IFormItem[] = [
    //   {
    //     type: 'input',
    //     label: 'ID',
    //     placeholder: '请输入ID'
    //   },
    //   {
    //     type: 'input',
    //     label: '用户名',
    //     placeholder: '请输入用户名'
    //   },
    //   {
    //     type: 'password',
    //     label: '密码',
    //     placeholder: '请输入密码'
    //   },
    //   {
    //     type: 'select',
    //     label: '运动',
    //     placeholder: '请选择喜欢的运动',
    //     options: [
    //       { title: 'basketball', value: 'basketball' },
    //       { title: 'football', value: 'football' }
    //     ]
    //   },
    //   {
    //     type: 'datepicker',
    //     label: '创建时间',
    //     otherOptions: {
    //       startPlaceholder: 'Start Time',
    //       endPlaceholder: 'End Time',
    //       type: 'daterange'
    //     }
    //   }
    // ]

    // const labelWidth = '120px'
    // const itemStyle = {
    //   padding: '10px 35px'
    // }
    // const colLayout = {
    //   span: 8
    // }

    // const formConfig: IForm = {
    //   formItems: [
    //     {
    //       type: 'input',
    //       label: 'ID',
    //       placeholder: '请输入ID'
    //     },
    //     {
    //       type: 'input',
    //       label: '用户名',
    //       placeholder: '请输入用户名'
    //     },
    //     {
    //       type: 'password',
    //       label: '密码',
    //       placeholder: '请输入密码'
    //     },
    //     {
    //       type: 'select',
    //       label: '运动',
    //       placeholder: '请选择喜欢的运动',
    //       options: [
    //         { title: 'basketball', value: 'basketball' },
    //         { title: 'football', value: 'football' }
    //       ]
    //     },
    //     {
    //       type: 'datepicker',
    //       label: '创建时间',
    //       otherOptions: {
    //         startPlaceholder: 'Start Time',
    //         endPlaceholder: 'End Time',
    //         type: 'daterange'
    //       }
    //     }
    //   ],
    //   labelWidth: '120px',
    //   itemStyle: {
    //     padding: '10px 35px'
    //   },
    //   colLayout: {
    //     span: 8
    //   }
    // }

    return {
      formConfig
    }

    // return {
    //   colLayout,
    //   itemStyle,
    //   labelWidth,
    //   formItems
    // }
  }
})
</script>

<style scoped>
</style>
