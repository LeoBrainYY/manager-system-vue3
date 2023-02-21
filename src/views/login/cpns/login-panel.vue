<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-21 14:13:22
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-21 19:32:13
 * @FilePath: \manager_vue3\manager_-system\src\views\login\cpns\login-panel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-panel">
    <h1>管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" :stretch="true" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" ></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <!-- 记住密码 验证登录 -->
    <div class="accout-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" style="width: 100%; margin-top: 10px" @click="handleLoginClick">登录</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Iphone, User } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    Iphone,
    User,
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    // 获取LoginAccount的类型 并获取他的实例
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref<string>('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // 电话登录
      }
    }

    return {
      currentTab,
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 180px;

  h1 {
    text-align: center;
  }

  .accout-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
