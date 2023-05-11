<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 00:09:26
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-12 06:34:35
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

        <!-- 上部搜索框 -->
        <page-search
          :formConfig="formConfig"
          @resetBtnClick="handleResetClick"
          @queryBtnClick="handleQueryClick"></page-search>
          <!-- 表格数据内容 -->
        <page-content
          :contentTableConfig="contentTableConfig"
          pageName="users"
          ref="pageContentRef"
          @newButtonClick="handleNewUser"
          @editButtonClick="handleEditUser"></page-content>
          <!-- 弹框 -->
        <page-modal
          :defaultInfo="defaultInfo"
          :modalConfig="modalConfig"
          ref="pageModalRef"></page-modal>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from '@/store'

import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'user',
  components: {
    // CrayonForm
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 弹框新增 编辑逻辑
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(item => item.field === 'password')
      console.log(passwordItem, 'passwordItem')
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }

    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(item => item.field === 'password')
      // console.log(passwordItem, 'passwordItem')
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    // 2. 动态添加部门和角色列表


    // 3.调用hook获取公共变变量和函数
    const [pageModalRef, defaultInfo, handleNewUser, handleEditUser] = usePageModal(newCallBack, editCallBack)
    // console.log(userList, userCount)

    // const handleNewUsaer = () => {
    //   return 0
    // }

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
      formConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      handleNewUser,
      handleEditUser,
      pageModalRef,
      defaultInfo
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
