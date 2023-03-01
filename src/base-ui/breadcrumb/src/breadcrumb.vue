<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-01 17:42:36
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-01 17:55:46
 * @FilePath: \manager_vue3\manager_-system\src\base-ui\breadcrumb\src\breadcrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
</style>

