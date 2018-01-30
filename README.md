git clone -->  npm install

练习一下webpack(3.10.0)+react(16.2.0)+react-router-dom(4.2.2)+react-redux(5.0.6)的最新配置

npm run dev  开发热更新

npm run test test环境连接发布系统,发布系统自动上传至阿里云服务

npm run beta beta环境连接发布系统,发布系统自动上传至阿里云服务

npm run prod prod环境自动上传至ftp服务器,运维进行发布


## 目录结构

react-app 项目根目录
|---build 项目构建代码  
|　　|---config 构建项目用到的配置  
|　　|---task 构建任务入口  
|　　|---webpack.config.dev.js webpack开发配置  
|　　|---webpack.config.prod.js webpack上线配置  
|---node_modules node模块  
|---src 应用源码目录  
|　　|---app业务源码  
|　　|　　|---...
|　　|---global 全局性   
|　　|　　|---component 全局组件  
|　　|　　|---iconfont 字体图标  
|　　|　　|---img 全局图片  
|　　|　　|---common 整站通用适配  
|　　|　　|---lib 其他模块(polyfill) 
|　　|　　|---scss css重置和公用
|　　|　　|---util 工具方法   
|　　|　　|---wechat 微信相关  
|---dist 打包生成代码目录  
|---uploadZip 上线Zip包目录  
|---.babelrc babel运行时配置  
|---.gitignore git忽略配置  
|---package-lock.json npm配置锁  
|---package.json npm配置  
|---postcss.config.js postcss插件配置  
|---README.md 项目自述 