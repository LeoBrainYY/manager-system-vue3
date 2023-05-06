<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 00:12:59
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-06 17:36:34
 * @FilePath: \manager_vue3\manager_-system\src\views\main\product\goods\goods.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="goods">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods">
      <!-- <template #image="scope">
        <el-image
          style="width: 80px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template> -->
      <template #oldPrice="scope">
       ￥ {{ scope.row.oldPrice }}
      </template>
    </page-content>
      <!--  -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
