/*
* @Author: chenchao
* @Date: 2017-12-30 13:48:44
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-04 11:55:02
*/
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import chalk from 'chalk';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';  //postcss自动添加css前缀插件
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';  //打包完成提示

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
        utils: 'utils',
        cm: 'cm',
    }),
    new ExtractTextPlugin("[name].css"), //提取出来的样式放在[name].css文件中*/
    new HtmlWebpackPlugin({  //自动生成html文件并载入打包后的css js
        title: 'react-main',
        filename: 'index.html',
        template: 'app/main.html',
        inject: 'body',  //默认插入body底部 选项：true, body, head, false
        //favicon: '路径' title图标 
        minify: false,  //是否压缩html文件
        //hash: false,   //给生成的 js 文件一个独特的 hash 值
        //cache: false,  //在内容变化时才生成一个新的文件
        chunks: ['vendor','common','main'],  //指定引入哪些特定的文件
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
    new webpack.optimize.CommonsChunkPlugin({
        name: ['commom','vendor'],
        minChunks: Infinity // 不需要抽取公共代码到这个文件中
    })                
]
