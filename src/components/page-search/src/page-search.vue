<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 10:13:33
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-09 18:59:34
 * @FilePath: \manager_vue3\manager_-system\src\components\page-search\src\page-search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <crayon-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h1 style="padding: 30px 0">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </crayon-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import CrayonForm from '@/base-ui/form'

export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    CrayonForm
  },
  setup(props) {
    // 双向绑定的数据应该由配置文件中的field字段来决定()每个页面会自动获取相关属性
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // reset
    const handleResetClick = () => {
      formData.value = formOriginData
    }

    // const formData = ref({
    //   id: '',
    //   name: '',
    //   password: '',
    //   sport: '',
    //   createTime: ''
    // })

    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped>
.handle-btn {
  text-align: right;
  padding: 0 50px 20px 0;
  /* 使用margin会穿透 */
  /* margin: 0 50px 20px 0; */
}
</style>
