/*
* @Author: chenchao
* @Date: 2017-12-30 13:36:33
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 13:40:37
*/
import { argv } from 'yargs'; //可以拿到npm run命令中的字段

// 环境：test|beta|prod，默认prod
export const envName = ['test', 'beta', 'prod'].find(e => argv[e]) || 'prod'

export const envConfig = {
  test: {
    publicPath: 'http://test.chenchaoc.top/resource/app_test/'
  },
  beta: {
    publicPath: 'http://beta.chenchaoc.top/resource/app_beta/'
  },
  prod: {
    publicPath: 'https://resource.chenchaoc.top/app/'
  }
}[envName]