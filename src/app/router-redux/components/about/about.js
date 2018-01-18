/*
* @Author: chenchao
* @Date: 2018-01-18 18:35:58
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 19:14:56
*/

import {Redirect,Switch,Link,Route} from 'react-router-dom';
//import Phone from './about-phone.js';
//import Content from './about-content.js';
const Phone = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-about-phone" */ './about-phone.js'));
const Content = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-about-content" */ './about-content.js'));

export default class extends React.Component {
    componentDidMount() {
        console.log('About渲染完毕');
    }
    render(){
        if(!this.props.isLogin){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h3>about基本页面</h3>
                <ul>
                    <li><Link to="/about/phone">点击进入联系电话</Link></li>
                    <li><Link to="/about/content">点击进入公司介绍</Link></li>
                </ul>
                <div style={{marginTop: '30px'}}>这是about路由二级页面-------
                    <Switch>
                        <Route path="/about/phone" component={Phone} />
                        <Route path="/about/content" component={Content} />
                    </Switch>
                </div>
            </div>
        )
    }
}






