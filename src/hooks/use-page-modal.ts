/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-05-12 04:52:24
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-12 05:47:11
 * @FilePath: \manager_vue3\manager_-system\src\hooks\use-page-modal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'

// 定义函数类型
type CallbackFn = () => void

export function usePageModal (newCallBack?: CallbackFn, editCallBack?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const defaultInfo = ref({})

  const handleNewUser = () => {
    // 通过ref获取子组件的属性值 并改变
    // console.log(pageModalRef.value, 'pageModalRef.value')
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
      defaultInfo.value = {}
    }

    // 有值的时候进行调用
    newCallBack && newCallBack()
  }

  const handleEditUser = (item: any) => {
    // defaultInfo.value = item
    // 获取到的数据传递传递给子组件
    defaultInfo.value = { ...item }

    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }

    editCallBack && editCallBack()
  }

  return [pageModalRef, defaultInfo, handleNewUser, handleEditUser]
}
