<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-08 17:52:48
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-11 10:40:43
 * @FilePath: \manager_vue3\manager_-system\src\components\page-content\src\page-content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-content">
    <crayon-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button
          @click="handleNewUsaer"
          type="primary">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
      <template #status="scope">
        <el-button size="mini" :type="scope.row.enable ? 'success' : 'danger'">{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #handler>
        <div>
          <el-button icon="el-icon-edit" size="mini" type="text">编辑</el-button>
          <el-button icon="el-icon-delete" size="mini" type="text">删除</el-button>
        </div>
      </template>
    </crayon-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import CrayonTable from '@/base-ui/table'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    CrayonTable
  },
  setup(props) {
    const store = useStore()
    // 发送网络请求 请求页面数据
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }
    getPageData()

    // getters中获取数据
    const dataList = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })

    // state中获取数据
    const dataCount = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    return {
      dataList,
      getPageData,
      dataCount
    }
  }
})
</script>

<style scoped>
  .page-content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
  }
</style>
