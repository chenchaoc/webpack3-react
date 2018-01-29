/*
* @Author: chenchao
* @Date: 2018-01-18 16:48:54
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-24 11:33:58
*/
import Home from './home.js';
import { connect } from 'react-redux';
import { outLogin } from '../../actions.js';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

function mapStateToProps(state) {
    console.log(state)
    return state
}

// 哪些 action 创建函数是我们想要通过 props 获取的？


export default connect(mapStateToProps)(Home)