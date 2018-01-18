/*
* @Author: chenchao
* @Date: 2018-01-18 14:33:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 17:30:07
*/

import { combineReducers } from 'redux';
import { GO_LOGIN, OUT_LOGIN } from './actions.js';

function isLogin(state= false, action){
    switch (action.type){
        case GO_LOGIN:
            return true
        case OUT_LOGIN:
            return false
        default:
            return state
    }
}

export default combineReducers({
    isLogin,
})