/*
* @Author: chenchao
* @Date: 2018-01-18 14:33:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-31 16:09:47
*/

import { combineReducers } from 'redux';
import { GO_LOGIN, OUT_LOGIN, SORT_REVERSE, GET_LIST } from './actions.js';

function isLogin(state = false, action){
    switch (action.type){
        case GO_LOGIN:
            return true
        case OUT_LOGIN:
            return false
        default:
            return state
    }
}

function newsList(state = [
        {id:1,title:"a",con:"caaaaaaaaaaaaaaaa"},
        {id:2,title:"b",con:"cbbbbbbbbbbb"},
        {id:3,title:"c",con:"cccccccccccccc"},
        {id:4,title:"d",con:"cddddddddddddd"},
        {id:5,title:"e",con:"ceeeeeeeeeeee"}
    ], action){
    switch (action.type){
        case SORT_REVERSE:
            let a = []
            for(let i=state.length-1;i>=0;i--){
                a.push(state[i]);
            }
            return a
        default: 
            return state
    }
}

function pageInfo(state = {
    list: [
        {id:1,text:"111111"},
        {id:2,text:"222222"},
        {id:3,text:"3333333333"},
        {id:4,text:"44444444444"},
        {id:5,text:"555555555"}
    ],
    allpage: 7,
    currentpage: 1,
    nextpage: true
}, action){
    switch(action.type){
        case GET_LIST: 
            console.log(action)
            return Object.assign({},state,{
                list: action.list,
                allpage: action.allpage,
                currentpage: action.currentpage,
                nextpage: action.nextpage
            })
        default: 
            return state
    }
}

export default combineReducers({
    isLogin,
    newsList,
    pageInfo
})