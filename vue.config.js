/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2022-11-02 16:58:13
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-04-26 14:12:37
 * @FilePath: \manager_vue3\manager_-system\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
module.exports = {
  // CLI提供的属性
  outputDir: './build',
  // 解决本地打包 build文件下index.html无法运行
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.207.32.32:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置方式二: 和webpack完全一致,最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        // webpack内部处理了@会被当做当前文件夹下面的src
        components: '@/components'
      }
    }
  }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'

  //   }
  // }

  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // },

}
