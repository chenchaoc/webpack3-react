/*
* @Author: chenchao
* @Date: 2017-12-28 16:38:03
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-17 12:29:30
*/
import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import devPlugins from './config/devPlugins.js';


export default {
    context: `${process.cwd()}/src`,
    entry,
    output: {
        path: `${process.cwd()}/dist`,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name][id].js' //代码分割时非入口文件js的命名规则
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