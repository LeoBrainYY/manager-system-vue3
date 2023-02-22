<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-19 12:05:14
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-22 21:44:47
 * @FilePath: \manager_vue3\manager_-system\src\views\main\main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <!-- 左侧菜单栏 -->
        <!-- 将点击面包屑的布尔值传到nav-menu.vue 进行菜单栏组件的折叠 -->
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <!-- 顶部 -->
          <nav-header @foldChange="handleFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)

    const handleFoldChange = (isFold: boolean) => {
      console.log('isFold', isFold)
      isCollapse.value = isFold
    }

    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
