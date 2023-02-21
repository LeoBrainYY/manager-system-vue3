<template>
  <div>
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input v-model="account.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div style="display: flex">
          <el-input v-model="account.code"></el-input>
          <el-button style="margin-left: 10px" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      num: '',
      code: ''
    })

    return {
      account,
      rules
    }
  }
})
</script>

<style scoped>
</style>
