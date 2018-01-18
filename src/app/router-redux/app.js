/*
* @Author: chenchao
* @Date: 2018-01-18 14:34:12
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 17:02:44
*/
import { Route, Link, Switch } from 'react-router-dom';
import NavRedux from './components/nav/navRedux.js';
const LoginRedux = cm.asyncComponent(() => import(/* webpackChunkName: "react-login" */ './components/login/loginRedux.js'));
const HomeRedux = cm.asyncComponent(() => import(/* webpackChunkName: "react-home" */ './components/home/homeRedux.js'));
import {connect} from 'react-redux';
//import store from './store.js';

export default class App extends React.Component {
    handleClick(){
        console.log(this.props)
    }
    render(){
        return (
            <div className="app-container">
                <div className="app-header">
                    <NavRedux />
                </div>
                <div className="app-main">
                    <Switch>
                        <Route path="/" exact component={LoginRedux} />
                        <Route path="/home" component={HomeRedux} />
                        {/*<Route exact path="/about" component={AboutRedux} />*/}
                        {/*<Route exact path="/news" component={NewsRedux} />*/}
                    </Switch>
                </div>
            </div>
        )
    }
}

//connect()(App)  //这样才能在当前使用 dispatch ~~ 但是用了route就无法匹配了？？


