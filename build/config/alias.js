/*
* @Author: chenchao
* @Date: 2017-12-28 16:39:18
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-30 10:39:03
*/
const cwd = process.cwd()

export default {
    util: `${cwd}/src/global/util/util.js`,
    cm: `${cwd}/src/global/common/cm.js`,
    wechat: `${cwd}/src/global/wechat/index.js`,
    '@global': `${cwd}/src/global`,
    '@globalcomponent': `${cwd}/src/global/component`,
}