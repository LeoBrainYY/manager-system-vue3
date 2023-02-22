<!--
 * @Author: xiaoxinYy 3037686283@qq.com
 * @Date: 2023-02-22 17:55:24
 * @LastEditors: xiaoxinYy 3037686283@qq.com
 * @LastEditTime: 2023-02-22 21:35:49
 * @FilePath: \manager_vue3\manager_-system\src\components\nav-header\src\nav-header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ?  'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"></i>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      // 点击icon之后 传到main.vue
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
