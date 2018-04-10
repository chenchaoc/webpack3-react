/*
* @Author: chenchao
* @Date: 2017-12-28 16:39:18
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-03-30 11:25:11
*/
const cwd = process.cwd() //返回 Node.js 进程当前工作的目录

export default {
    util: `${cwd}/src/global/util/util.js`,
    cm: `${cwd}/src/global/common/cm.js`,
    wechat: `${cwd}/src/global/wechat/index.js`,
    '@global': `${cwd}/src/global`,
    '@globalcomponent': `${cwd}/src/global/component`,
}