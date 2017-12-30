/*
* @Author: chenchao
* @Date: 2017-12-28 16:38:03
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 14:34:21
*/
import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import devPlugins from './config/devPlugins.js';
import { argv } from 'yargs'; 

export default {
    context: `${process.cwd()}/src`,
    entry,
    output: {
        path: `${process.cwd()}/dist`,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name][id].js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"],
        alias
    },
    devtool: 'source-map',
    watch: true,
    stats: "errors-only", //精确控制要显示的 bundle 信息
    module: {
        rules: loaders,
    },
    plugins: [...basePlugins,...devPlugins]
}