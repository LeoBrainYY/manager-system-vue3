<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2022-11-02 16:58:12
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-19 13:07:09
 * @FilePath: \manager_vue3\manager_-system\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>

    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button type="primary">测试</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
