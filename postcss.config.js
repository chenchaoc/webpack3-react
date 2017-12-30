/*
* @Author: chenchao
* @Date: 2017-12-30 00:07:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 00:08:09
*/
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 version', 'iOS >= 7', 'Android >= 4']
        })
    ]
};