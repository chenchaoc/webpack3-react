/*
* @Author: chenchao
* @Date: 2018-01-15 11:38:25
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-22 17:15:50
*/
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Fragment } from 'react';

const Home = cm.asyncComponent(() => import(/* webpackChunkName: "react-home" */ './home.js'))
const User = cm.asyncComponent(() => import(/* webpackChunkName: "react-user" */ './user.js'))
const About = cm.asyncComponent(() => import(/* webpackChunkName: "react-about" */ './about.js'))
const Product = cm.asyncComponent(() => import(/* webpackChunkName: "react-product" */ './product.js'))

export default class extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }
    render(){
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>{/*只匹配一个route 由上到下匹配*/}
                        <Route path="/" exact component={Home} />{/*exact的意思是精确匹配 最终只展示一个route 否则的话在/user下会展示home和user*/}
                        <Route path="/user" component={User} />
                        <Route path="/about" component={About} />
                        <Route path="/product" exact component={Product} />
                        <Route path="/product/:productId" component={Product} />
                        <Redirect to="/" />                 
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}