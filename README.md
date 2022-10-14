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
以及让 **create-react-app** 自动支持 **css-loader** 的方法：
安装 **craco-css-modules** 在 **craco.config.js** 中配置 详细可看包的文档

# 在 C-R-A 中 使用配置式路由，需要安装 react-router-config 这个包，最优解决方案是第三点

注意事项：在使用配置是路由时，react-router-config 和 react-router-dom 包的版本不能超过 6.0.0，否则会报错

解决方案:
1 卸载新版本，再安装 5 的版本
2 将所有 Switch 改为 Routes，Redirect 改为 Navigate ，withRouter 改为 useNavigate
3 在最新的 **react-router6.4** 版本中通过 **const router= createBrowserRouter(注入路由文件)** 在到 render 之中通过 **<RouterProvider router={router} />** API，完成配置
