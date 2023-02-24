<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 00:09:26
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-02-23 17:41:15
 * @FilePath: \manager_vue3\manager_-system\src\views\main\system\user\user.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user">
    <div class="search">
      <crayon-form :formItems="formItems"></crayon-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CrayonForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    CrayonForm
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        label: '运动',
        placeholder: '请选择喜欢的运动'
      },
      {
        label: '创建时间',
        placeholder: '请选择时间创建范围'
      }
    ]

    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
