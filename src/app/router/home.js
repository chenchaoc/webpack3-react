/*
* @Author: chenchao
* @Date: 2018-01-15 14:58:28
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-22 17:16:57
*/
import { Switch, Route, Link, Redirect, Prompt } from 'react-router-dom';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="home">
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
                    <Link to={{pathname:'/product/aaaaaaaa',hash:'hahaha'}}>Product/productId</Link>
                </li>
            </ul>
        )
    }
}