/*
* @Author: chenchao
* @Date: 2017-12-30 13:42:13
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-02 15:11:20
*/
import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import prodPlugins from './config/prodPlugins.js';
import { envConfig } from './config/env.js';

export default {
    context: `${process.cwd()}/src`,
    entry,
    output: {
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
    watch: false,
    module: {
        rules: loaders,
    },
    plugins: [...basePlugins,...prodPlugins]
}