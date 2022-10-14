# react 学习 10.13

<!-- 项目中碰到的问题，react默认不支持less语法 -->

# npm 版本过高会导致装包失败，可以通过 --legacy-peer-deps 忽略来完成下包

通过 react-create-app 搭建的项目如需自定义配置，有两种方案：
通过 yarn ejct 暴露命令，但此操作不可逆
最终解决方案:使用 @/craco/craco 进行自定义配置，
在 项目 根文件下创建 craco.config.js
在 src 根文件下创建 react-app-env.d.ts：
添加如下代码
/// <reference types="react-scripts" />

declare module "\*.module.less"
以及让 create-react-app 自动支持 css-loader 的方法：
安装 craco-css-modules 在 craco.config.js 中配置 详细可看包的文档
