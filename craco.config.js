//craco-antd插件包含 craco-less，babel-plugin-import
const CracoAntDesignPlugin = require('craco-antd');
const CracoCSSModules = require('craco-css-modules');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    // 设置代理
    devServer: {
        proxy: {
            // 接口后缀/api/v1/topics
            '': {
                target: '', // 地址 https://172.253.60.195:20018/
                changeOrigin: true,
                pathRewrite: {}
            }
        },
        port: 8000
    },
    plugins: [
        {
            // 支持less
            plugin: CracoAntDesignPlugin
        },
        {
            // 支持css-loader写法
            plugin: CracoCSSModules
        }
    ],

    webpack: {
        // 路径别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src/components'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            routers: path.resolve(__dirname, 'src/routers'),
            services: path.resolve(__dirname, 'src/services'),
            pages: path.resolve(__dirname, 'src/pages')
        },
        module: {
            rules: [
                // 支持typescript编程,当遇到 .ts/.tsx后缀的文件时，使用ts-loader进行加载
                {
                    test: /.(ts|tsx)$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};
