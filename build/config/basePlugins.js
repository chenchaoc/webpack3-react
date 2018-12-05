/*
* @Author: chenchao
* @Date: 2017-12-30 13:48:44
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-09-12 09:58:12
*/
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';  //postcss自动添加css前缀插件
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';  //打包完成提示
//如果直接后端配置了路径,此时需要CopyWebpackPlugin||举个栗子：域名/img/xxx.jpg  此时就需要将img移至dist目录下，最终放在web服务器根目录下
//import CopyWebpackPlugin from 'copy-webpack-plugin';  //复制目录或者文件至打包后的dist 
//import ImageminPlugin from 'imagemin-webpack-plugin';  //图片压缩插件,好像会损害图片质量?建议使用在线压缩 https://tinypng.com/

export default [
    new ProgressBarPlugin({
        format: `${chalk.bold('[:bar]')} ${chalk.cyan.bold(':percent (:elapseds)')} :msg`,
        clear: true,
        summary: false,
        summaryContent: false,
        customSummary (buildTime) {
          process.stdout.write(`=====${chalk.green.bold(`[ built in ${buildTime} ]`)}=====`)
        }
    }),
    new webpack.ProvidePlugin({  //全局载入的可以调用的组件名称
        React: 'react',
        ReactDOM: 'react-dom',
        util: 'util',
        cm: 'cm',
        wechat: 'wechat'
    }),
    new HtmlWebpackPlugin({  //自动生成html文件并载入打包后的css js
        title: 'react-app',
        filename: 'index.html',
        template: 'app/index.html',
        inject: 'body',  //默认插入body底部 选项：true, body, head, false
        //favicon: '路径' title图标 
        minify: false,  //是否压缩html文件
        //hash: false,   //给生成的 js 文件一个独特的 hash 值
        //cache: false,  //在内容变化时才生成一个新的文件
        chunks: ['vendor','common','app'],  //指定引入哪些特定的文件
        chunksSortMode: 'manual' //chunks按照顺序插入，而不是乱的  values: 'none' | 'auto' | 'dependency' |'manual' | {function} - default: 'auto'
        //excludeChunks: ['main'],  //排除掉哪些文件
        //xhtml: true  //如果为true,则以兼容xhtml的模式引用文件
    }),
    new WebpackNotifierPlugin({
        title: '开发服务器',
        successSound: 'Submarine',
        failureSound: 'Glass',
        suppressSuccess: true
    }),
    new webpack.HashedModuleIdsPlugin(), //没有变化的文件hash不会更改，配合下面的使用,千辛万苦找了几年~ ~
    new webpack.optimize.CommonsChunkPlugin({
        names: ['common','vendor'],
        minChunks: Infinity
    })             
]
