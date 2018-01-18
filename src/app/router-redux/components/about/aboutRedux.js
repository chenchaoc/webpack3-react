/*
* @Author: chenchao
* @Date: 2018-01-18 19:05:53
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 19:10:21
*/

import About from './about.js';
import { connect } from 'react-redux';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

function mapStateToProps(state) {
    return state
}

// 哪些 action 创建函数是我们想要通过 props 获取的？

export default connect(mapStateToProps)(About)