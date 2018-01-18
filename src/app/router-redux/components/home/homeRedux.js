/*
* @Author: chenchao
* @Date: 2018-01-18 16:48:54
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 16:51:49
*/
import Home from './home.js';
import { connect } from 'react-redux';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

function mapStateToProps(state) {
    return {
        isLogin:state.loginReq
    }
}

// 哪些 action 创建函数是我们想要通过 props 获取的？

function mapDispatchToProps(dispatch) {
    return {
        OUTLOGIN:function(history){
            dispatch({type:"OUT_LOGIN"})
            history.push("/")
            
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)