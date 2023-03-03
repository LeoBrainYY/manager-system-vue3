<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-03 15:09:35
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 17:27:22
 * @FilePath: \manager_vue3\manager_-system\src\base-ui\table\src\table.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChngae">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="80"></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <!-- :row="scope.row" 把插槽中的数据传过去 -->
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    // console.log(props)

    const handleSelectionChngae = (value: any) => {
      // 发出选中的数据
      emit('selectionChange', value)
    }

    return {
      handleSelectionChngae
    }
  }
})
</script>

<style scoped>
</style>
