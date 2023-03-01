<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-22 14:53:09
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-01 17:19:36
 * @FilePath: \manager_vue3\manager_-system\src\components\nav-menu\src\nav-menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo">
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
        :default-active="defaultValue"
        class="el-menu-vertical"
        :collapse="collapse"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
      >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级带单展开的标题 -->
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="subitem.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
      </el-menu>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'

import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const store = useStore()
    // 通过vuex获取菜单
    const userMenus = computed(() => store.state.login.userMenus)

    // router
    const router = useRouter()
    // 获取当前页面的路径
    const route = useRoute()
    const currentPath = route.path

    // 刷新页面左侧菜单栏选中的某项data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')


    // event handle
    const handleMenuItemClick = (item: any) => {
      console.log(item, 'item')
      router.push({
        path: item.url ?? '/not-found'
      })
    }

    return {
      defaultValue,
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  // 处理左侧菜单栏展开合并竖直线条问题
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
