<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 15:15:43
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-02-24 10:45:07
 * @FilePath: \manager_vue3\manager_-system\src\base-ui\form\src\form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      // PropType定义Array数组中传入的类型
      type: Array as PropType<IFormItem[]>,
      default: () => {
        return []
      }
    }
  },
  setup() {

    return {}
  }
})
</script>

<style scoped>
</style>
