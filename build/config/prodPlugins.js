/*
* @Author: chenchao
* @Date: 2017-12-30 13:47:07
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-15 10:40:02
*/
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';  //css压缩工具
import CleanWebpackPlugin from 'clean-webpack-plugin';  //清除dist目录插件
import ZipWebpackPlugin from 'zip-webpack-plugin';  //打包完成后dist目录压缩成zip
import ManifestPlugin from 'webpack-manifest-plugin'; //文件映射路径

export default [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin("[name]_[chunkhash:8].css"), //提取出来的样式放在[name].css文件中*/
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        __DEV__: false,
        __PROD__: true
    }),
    new OptimizeCssAssetsPlugin({  //css压缩去除注释
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true            
    }),    
    new webpack.optimize.UglifyJsPlugin({  //js压缩工具
        // 最紧凑的输出
        beautify: false,
        // 删除所有的注释
        comments: false,
        sourceMap: false,
        compress: {
            // 在UglifyJs删除没有用到的代码时不输出警告  
            warnings: false,
            // 删除所有的console语句 产品模式删除  开发模式显示
            // 还可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
        }
    }),
    new ManifestPlugin({
        fileName: 'manifest.json',
        basePath: `${process.cwd()}/dist/`
    }),    
    new CleanWebpackPlugin(
        ['uploadZip','dist'],  //清空文件夹名称
        {   root: process.cwd(),  //根目录
            verbose: false,  //是否在控制台输出
            dry: false,  //false直接删除文件  true模拟删除
            exclude: [''], //排除不删除的目录
            watch: false,  //true删除文件重新编译
            allowExternal: false  //允许是否在webpack跟外清除文件夹，默认false 不允许
        }
    ),
    new ZipWebpackPlugin({
        path: '../uploadZip',  //相对于根目录
        filename: 'react-app.zip'
    }),
]