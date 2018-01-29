/*
* @Author: chenchao
* @Date: 2018-01-18 14:33:13
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-25 17:59:04
*/

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';
import reduxThunk from 'redux-thunk'; //异步action   但是要写一个action creator？？

export default createStore(reducers, applyMiddleware(reduxThunk))