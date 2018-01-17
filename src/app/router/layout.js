/*
* @Author: chenchao
* @Date: 2018-01-15 15:31:44
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-17 16:15:52
*/
import { Switch, Route, Link, Redirect, Prompt } from 'react-router-dom';
import { Fragment } from 'react';

const Home = cm.asyncComponent(() => import(/* webpackChunkName: "react-home" */ './home.js'))
const User = cm.asyncComponent(() => import(/* webpackChunkName: "react-user" */ './user.js'))
const About = cm.asyncComponent(() => import(/* webpackChunkName: "react-about" */ './about.js'))
const Product = cm.asyncComponent(() => import(/* webpackChunkName: "react-product" */ './product.js'))

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true
        }
    }
    render(){
        let {isLoading} = this.state;
        return (
            <Fragment>
                <header style={{marginBottom: '30px'}}>react-router-4</header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/product/abc',hash:'abc'}}>Product/productId</Link>
                    </li>
                </ul>
                <main style={{marginTop: '200px'}}>
                    <Switch>{/*只匹配一个route*/}
                        <Route path="/" exact component={Home}></Route> {/*exact的意思是最终只展示一个route 否则的话在/user下会展示home和user*/}
                        <Route path="/user" component={User}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/product" exact component={Product}></Route>
                        <Route path="/product/:productId" component={Product} />                        
                    </Switch>
                </main>
            </Fragment>
        )
    }
} 