/*
* @Author: chenchao
* @Date: 2018-01-18 14:34:21
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 15:14:05
*/
export const GO_LOGIN = 'GO_LOGIN';
export const OUT_LOGIN = 'OUT_LOGIN';


export function goLogin(data){
    return {
        type: OUT_LOGIN,
        data
    }
}
export function outLogin(data){
    return {
        type: OUT_LOGIN,
        data        
    }
}