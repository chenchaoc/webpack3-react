/*
* @Author: chenchao
* @Date: 2018-01-18 14:32:40
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 15:16:50
*/

import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
//redux 和react-redux（关联react和redux）
import store from './store.js';
import { Provider } from 'react-redux';
import App from './app.js';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    }
}