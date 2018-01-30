/*
* @Author: chenchao
* @Date: 2018-01-18 14:45:03
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-29 11:05:09
*/
import Login from './login.js';
import { connect } from 'react-redux';
import { goLogin } from '../../actions.js';
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Login);