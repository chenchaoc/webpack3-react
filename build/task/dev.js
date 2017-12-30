/*
* @Author: chenchao
* @Date: 2017-12-28 22:32:24
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 14:22:04
*/

import express from 'express'; //nodejs 框架
import ip from 'ip'; //ip地址
import chalk from 'chalk'; //变色
import webpack from 'webpack'; //webpack
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import httpProxyMiddleware from 'http-proxy-middleware';

import proxyConfig from '../config/proxyConfig.js';
import webpackConfig from '../webpack.config.dev.js';

const hotclient = ['webpack-hot-middleware/client?noInfo=true&reload=true'];
const entry = webpackConfig.entry;
Object.keys(entry).forEach((name) => {
  const value = entry[name]
  if (Array.isArray(value)) {
    value.unshift(...hotclient)
  } else {
    entry[name] = [...hotclient, value]
  }
})

const webpackCompiler = webpack(webpackConfig)
const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackCompiler.options.output.publicPath,
  noInfo: true,
  quiet: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    children: false,
    modules: false
  }
})

const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
  log: false
})

const devServer = express()

devServer.use(connectHistoryApiFallback({ verbose: false }))
devServer.use(devMiddleware)
devServer.use(hotMiddleware)

devServer.use(httpProxyMiddleware(['/api', '/img'], {
  logLevel: 'silent',
  target: `http://${ip.address()}:${proxyConfig.bkdServerPort}`,
  changeOrigin: true
}))

devServer.use(httpProxyMiddleware('**/*.action', {
  logLevel: 'silent',
  target: proxyConfig.proxyTarget,
  changeOrigin: true
}))

devServer.listen(proxyConfig.devServerPort, function () {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  console.log(`dev-server at ${chalk.magenta.underline(`http://${ip.address()}:${this.address().port}/`)}`)
})
