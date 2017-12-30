/*
* @Author: chenchao
* @Date: 2017-12-28 16:54:58
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 14:31:03
*/
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default [
    { //模块规则
        test: /\.js[x]?$/, //匹配文件
        exclude: /node_modules/, //排除node_modules
        loader: "babel-loader?cacheDirectory", //加载器 缓存？
        options: {
            presets: ['stage-0', 'react']
        }
    }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ 
            fallback: 'style-loader',
            use: ['css-loader?sourceMap','postcss-loader?sourceMap']
        })
    }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ 
            fallback: 'style-loader',
            use: ['css-loader?sourceMap','postcss-loader?sourceMap','sass-loader?sourceMap']
        }),
    }, {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        loader: 'file-loader?name=[name]_[sha512:hash:base64:7].[ext]'
    }    
]