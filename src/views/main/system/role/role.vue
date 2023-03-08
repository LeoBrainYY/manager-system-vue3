<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 00:10:49
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-08 19:57:07
 * @FilePath: \manager_vue3\manager_-system\src\views\main\system\role\role.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
