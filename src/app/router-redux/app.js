/*
* @Author: chenchao
* @Date: 2018-01-18 14:34:12
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 19:13:20
*/
import { Route, Link, Switch } from 'react-router-dom';
import NavRedux from './components/nav/navRedux.js';
const LoginRedux = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-login" */ './components/login/loginRedux.js'));
const HomeRedux = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-home" */ './components/home/homeRedux.js'));
const NotFind = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-404" */ './components/404/404.js'));
const AboutRedux = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-about" */ './components/about/aboutRedux.js'));
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
                <div className="app-main" style={{marginTop: '30px'}}>这是一级路由页面--------
                    <Switch>
                        <Route path="/" exact component={LoginRedux} />
                        <Route path="/home" exact component={HomeRedux} />
                        <Route path="/about" component={AboutRedux} />
                        {/*<Route exact path="/news" component={NewsRedux} />*/}
                        <Route component={NotFind} />
                    </Switch>
                </div>
            </div>
        )
    }
}

//connect()(App)  //这样才能在当前使用 dispatch ~~ 但是用了route就无法匹配了？？


