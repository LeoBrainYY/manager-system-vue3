/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-10 23:11:19
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-10 23:14:30
 * @FilePath: \manager_vue3\manager_-system\src\hooks\use-page-search.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'
import PageContent from "@/components/page-content"

export function usePageSearch () {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
