<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 00:09:26
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-08 19:02:07
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
        <!-- 这里使用的是双向绑定 然后子组件监听表单变化 还有一种方法就是把数据传递到子组件 -->
        <!-- 双向绑定表单数据 -->
        <!-- <crayon-form v-bind="formConfig" v-model="formData">
          <template #header>
            <h1 style="padding: 30px 0">高级检索</h1>
          </template>
          <template #footer>
            <div class="handle-btn">
              <el-button icon="el-icon-refresh">重置</el-button>
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
          </template>
        </crayon-form> -->
        <!-- <crayon-form v-bind="formConfig" :formData="formData"></crayon-form> -->
        <page-search :formConfig="formConfig"></page-search>
        <page-content
          :contentTableConfig="contentTableConfig"
          pageName="users"></page-content>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
// import CrayonForm from '@/base-ui/form'
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'user',
  components: {
    // CrayonForm
    PageSearch,
    PageContent
  },
  setup() {

    // console.log(userList, userCount)

    const handleNewUsaer = () => {
      return 0
    }

    // const getSelectionData = (value: any) => {
    //   // console.log(value, '1')
    // }
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
      handleNewUsaer,
      formConfig,
      contentTableConfig
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
