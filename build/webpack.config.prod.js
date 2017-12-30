/*
* @Author: chenchao
* @Date: 2017-12-30 13:42:13
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 14:34:16
*/
import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import prodPlugins from './config/prodPlugins.js';
import { envConfig } from './config/env.js';

import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';  //css压缩工具
import CleanWebpackPlugin from 'clean-webpack-plugin';  //清除dist目录插件
import ZipWebpackPlugin from 'zip-webpack-plugin';  //打包完成后dist目录压缩成zip

export default {
    context: `${process.cwd()}/src`,
    entry,
    ouput: {
        path: `${process.cwd()}/dist`,
        publicPath: envConfig.publicPath,
        filename: '[name].js',
        chunkFilename: '[name][id].js'    
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"],
        alias
    },
    devtool: false,
    watch: true,
    module: {
        rules: loaders,
    },
    plugins: [...basePlugins,...prodPlugins]           
}