<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-11 22:00:21
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-12 05:07:19
 * @FilePath: \manager_vue3\manager_-system\src\components\page-modal\src\page-model.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      width="30%"
      center>
      <crayon-form
        v-bind="modalConfig"
        v-model="formData"></crayon-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'

import CrayonForm from '@/base-ui/form'

export default defineComponent({
  components: {
    CrayonForm
  },
  props: {
    modalConfig: {
      type: Object,
      require: true
    },
    // user.vue传递的数据
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const centerDialogVisible = ref(false)
    // 修改的弹框显示的表格数据
    const formData = ref<any>({})

    // 监听defaultInfo的改变
    watch(
      () => props.defaultInfo,
      (newValue, oldValue) => {
        // console.log(oldValue, "oldValue")
        // console.log(newValue, "newValue")
        if (props.modalConfig) {
          // 从表格中取出属性值赋值给弹框组件中
          for (const item of props.modalConfig.formItems) {
            formData.value[`${item.field}`] = newValue[`${item.field}`]
          }
        }
      }
    )

    return {
      centerDialogVisible,
      formData
    }
  }
})
</script>

<style scoped>
</style>
