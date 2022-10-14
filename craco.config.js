//craco-antd插件包含 craco-less，babel-plugin-import
const CracoAntDesignPlugin = require("craco-antd")
const CracoCSSModules = require("craco-css-modules")
const path = require("path")

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  // 设置代理
  devServer: {
    proxy: {
      // 接口后缀/api/v1/topics
      "": {
        target: "", // 地址 https://172.253.60.195:20018/
        changeOrigin: true,
        pathRewrite: {},
      },
    },
  },
  // 支持less
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      // options: {
      //   customizeTheme: {
      //     "@primary-color": "#2878FF", //  antd 全局主色
      //     "@rootValue": 16,
      //   },
      // },
    },
    {
      plugin: CracoCSSModules,
    },
  ],

  // webpack配置
  webpack: {
    // 路径别名
    alias: {
      // "@": resolve("src"),
      // "@hooks": resolve("src/hooks"),
      // "@pages": resolve("src/pages"),
      // "@utils": resolve("src/utils"),
      // 示例
    },
  },
}
