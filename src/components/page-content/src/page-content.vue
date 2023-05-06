<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-08 17:52:48
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-06 17:20:57
 * @FilePath: \manager_vue3\manager_-system\src\components\page-content\src\page-content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page-content">
    <crayon-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo">
      <!-- v-model:page的写法是给双向绑定重新起名为page -->
      <!-- 默认名字为modelValue 所执行的事件为update:modelValue -->
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button
          @click="handleNewUsaer"
          type="primary">新建用户</el-button>
      </template>
      <!-- 列中的插槽 -->
      <template #status="scope">
        <el-button size="mini" :type="scope.row.status ? 'success' : 'danger'">{{ scope.row.status ? '启用' : '禁用' }}</el-button>
        <!-- <el-button size="mini" :type="scope.row.enable ? 'success' : 'danger'">{{ scope.row.enable ? '启用' : '禁用' }}</el-button> -->
      </template>
      <template #createAt="scope">
        <!-- 全局定义的函数 不用导入就可以使用 -->
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
      <!-- <template #image="scope">
        <el-image
          style="width: 80px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template> -->
      <!-- 动态插入剩余插槽 -->
      <template
        v-for="item in otherPropsSlots"
        :key="item.prop"
        #[item.slotName]="scope">
        <!-- 只有存在slotName 才去动态添加 -->
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </crayon-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref, watch } from 'vue'
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

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    // 从子组件双向绑定的值 监听页码数据变化 重新执行获取数据的函数
    watch(pageInfo, () => {
      // console.log('测试监听')
      // console.log(pageInfo.value, 123)
      getPageData()
    })

    // 2.发送网络请求 请求页面数据
    const getPageData = (queryInfo: any = {}) => {
      // console.log(pageInfo.value.currentPage)
      // console.log(pageInfo.value.currentPage - 1)
      // console.log(pageInfo.value.pageSize * pageInfo.value.currentPage)
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          // 偏移量
          offset: pageInfo.value.pageSize * ((pageInfo.value.currentPage > 1) ? (pageInfo.value.currentPage - 1) : 0),
          // 当前页码
          size: pageInfo.value.pageSize,
          // 查询参数
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3.vuex中获取数据
    const dataList = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })

    const dataCount = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    // 4. 获取其他动态插槽名称(过滤出默认插槽)
    const otherPropsSlots = props.contentTableConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropsSlots
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
