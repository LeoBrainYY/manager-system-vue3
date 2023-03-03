<!--
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-02-23 15:15:43
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-03-03 10:06:26
 * @FilePath: \manager_vue3\manager_-system\src\base-ui\form\src\form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]">
                  <el-option v-for="option in item.options" :value="option.value" :key="option.value">
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <!-- 注意这里的直接绑定属性写法 v-bind="" -->
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, watch, ref } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    // 双向绑定默认传的参数名
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      // PropType定义Array数组中传入的类型
      type: Array as PropType<IFormItem[]>,
      default: () => {
        return []
      }
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      defaylt: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    // 相当于复制了一份(深拷贝)
    const formData = ref({ ...props.modelValue })

    watch(formData, (newValue) => {
      // console.log(123)

      emit('update:modelValue', newValue)
    }, { deep: true })

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.crayon-form {
  padding-top: 20px;
}
</style>
