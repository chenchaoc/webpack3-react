/*
* @Author: chenchao
* @Date: 2018-01-23 11:10:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-23 11:12:49
*/
import News from './news.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(News);