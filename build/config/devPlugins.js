/*
* @Author: chenchao
* @Date: 2017-12-28 16:47:48
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-12 16:41:59
*/
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default [
    new ExtractTextPlugin("[name].css"), //提取出来的样式放在[name].css文件中*/
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        __DEV__: true,
        __PROD__: false
    }),
    new webpack.HotModuleReplacementPlugin(), //热更新
    new webpack.NoEmitOnErrorsPlugin()
]