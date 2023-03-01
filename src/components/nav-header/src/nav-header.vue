<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-22 17:55:24
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-01 18:16:39
 * @FilePath: \manager_vue3\manager_-system\src\components\nav-header\src\nav-header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ?  'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"></i>
    <div class="content">
      <crayon-breadcrumb></crayon-breadcrumb>
      <div>
        <el-dropdown @command="handleCommandClcik">
          <span class="el-dropdown-link">
            <!-- 头像 -->
            <el-avatar size="small" />
            <span>{{ name }}</span>
            <!-- <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon> -->
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-circle-close" command="logout">退出登录</el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ArrowDown } from '@element-plus/icons-vue'
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import CrayonBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    CrayonBreadcrumb
  },
  setup(props, { emit }) {
    const { origin, pathname } = location

    const store = useStore()

    const name = computed(() => store.state.login.userInfo.name)
    const isFold = ref(false)

    // 面包屑数据: [{ name: '', path: ''}]
    // const

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      // 点击icon之后 传到main.vue
      emit('foldChange', isFold.value)
    }

    const handleCommandClcik = (command: string | number) => {
      if (command === 'logout') {
        location.replace(`${origin}${pathname}#/login`)
      }
    }

    return {
      isFold,
      name,
      handleFoldClick,
      handleCommandClcik
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
