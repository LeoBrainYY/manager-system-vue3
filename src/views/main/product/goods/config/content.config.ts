/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-03-08 08:12:38
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-05-06 17:37:17
 * @FilePath: \manager_vue3\manager_-system\src\views\main\system\user\config\content.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status'},
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler'}
  ],
    // 是否显示序号
  showIndexColumn: true,
    // 是否显示可选中
  showSelectColumn: true
}
