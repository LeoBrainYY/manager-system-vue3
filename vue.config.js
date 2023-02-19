const path = require('path')
module.exports = {
  // CLI提供的属性
  outputDir: './build',
  // 解决本地打包 build文件下index.html无法运行
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
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
