/*
* @Author: chenchao
* @Date: 2018-01-18 14:32:40
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-03-29 17:40:22
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
    componentDidMount() {
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter basename={ __DEV__ || gloablEnv == 'prod' ? '' : `/${gloablEnv}`}>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    }
}