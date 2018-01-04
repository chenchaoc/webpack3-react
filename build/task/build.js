/*
* @Author: chenchao
* @Date: 2017-12-28 22:32:56
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-04 11:56:44
*/

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.js';
import deploy from './deploy.js';
//import upload from './upload.js';
import { envName } from '../config/env.js';

webpack(webpackConfig, function(error,stats){
    if(error){
        throw error
    }
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log(stats.toString({
        colors: true,
        hash: false,
        version: true,
        timings: true,
        assets: true,
        chunks: false,
        children: false,
        modules: false
    }))

    if (stats.hasErrors() || stats.hasWarnings()) {
        return
    }
    //集成发版
    if( envName == 'prod'){
        deploy();
    } else {
        
    }     
})


