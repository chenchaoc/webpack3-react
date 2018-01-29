/*
* @Author: chenchao
* @Date: 2018-01-18 14:34:21
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-26 10:24:01
*/
export const GO_LOGIN = 'GO_LOGIN';
export const OUT_LOGIN = 'OUT_LOGIN';
export const SORT_REVERSE = 'SORT_REVERSE';
export const GET_LIST = 'GET_LIST';


export function goLogin(data){
    return {
        type: GO_LOGIN,
        data
    }
}
export function outLogin(data){
    return {
        type: OUT_LOGIN,
        data
    }
}

export function sortNews(data){
    return {
        type: SORT_REVERSE,
        data
    }
}

export function getList(data){
    let list = [],
        allpage = 1,
        nextpage = false;

    if(data.currentpage==1){
        list=[
            {id:1,text:"111111"},
            {id:2,text:"222222"},
            {id:3,text:"3333333333"},
            {id:4,text:"44444444444"},
            {id:5,text:"555555555"},
        ]
        allpage=7
        nextpage=true;
    }else if(data.currentpage==2){
        list=[
            {id:1,text:"66666666"},
            {id:2,text:"7777777777"},
            {id:3,text:"8888888888"},
            {id:4,text:"99999999999"},
            {id:5,text:"101010"},
        ]
        allpage=7
        nextpage=true;              
    }else if(data.currentpage==3){
        list=[
            {id:1,text:"111111111111111"},
            {id:2,text:"121212"},
            {id:3,text:"131313"},
            {id:4,text:"141414"},
            {id:5,text:"15515"},
        ]
        allpage=7
        nextpage=true;              
    }else if(data.currentpage==4){
        list=[
            {id:1,text:"161616"},
            {id:2,text:"171717"},
            {id:3,text:"181818"},
            {id:4,text:"191919"},
            {id:5,text:"202020"},
        ]
        allpage=7
        nextpage=true;              
    }else if(data.currentpage==5){
        list=[
            {id:1,text:"2121"},
            {id:2,text:"22222"},
            {id:3,text:"232323"},
            {id:4,text:"242424"},
            {id:5,text:"252525"},
        ]
        allpage=7
        nextpage=true;              
    }else if(data.currentpage==6){
        list=[
            {id:1,text:"2626"},
            {id:2,text:"2727"},
            {id:3,text:"2828"},
            {id:4,text:"2929"},
            {id:5,text:"3030"},
        ]
        allpage=7
        nextpage=true;              
    }else if(data.currentpage==7){
        list=[
            {id:1,text:"3131"},
            {id:2,text:"3232"}
        ]
        allpage=7
        nextpage=false;             
    };

    return {
        type: GET_LIST,
        list,
        allpage,
        nextpage,
        currentpage: data.currentpage
    }        
}