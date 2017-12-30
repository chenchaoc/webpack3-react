/*
* @Author: chenchao
* @Date: 2017-12-28 14:38:02
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-28 14:41:44
*/
import axios from 'axios';

/**
 * [公共ajax]
 * @param  {String} url  [请求url]
 * @param  {Object} data [请求参数]
 * @return {Promise}     [返回结果]
 */
export function ajax(url,data={}){
    return axios.post(url,data).then(res => res.data)
}