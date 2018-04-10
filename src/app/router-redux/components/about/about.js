/*
* @Author: chenchao
* @Date: 2018-01-18 18:35:58
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-31 17:27:28
*/

import {Redirect,Switch,Link,Route} from 'react-router-dom';
//import Phone from './about-phone.js';
//import Content from './about-content.js';
const Phone = cm.asyncComponent(() => {
    console.log(22222);
    return(import(/* webpackChunkName: "async-react-about-phone" */ './about-phone.js'))
});
const Content = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-about-content" */ './about-content.js'));

export default class extends React.Component {
    componentDidMount() {
        console.log('About渲染完毕');
        console.log(this.props)
    }
    render(){
        if(!this.props.isLogin){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h3>我是about页面</h3>
                <ul>
                    <li><Link to={`${this.props.match.url}/phone`}>点击进入联系电话(about/phone)</Link></li>
                    <li><Link to={`${this.props.match.url}/content`}>点击进入公司介绍(about/content)</Link></li>
                </ul>
                <div style={{marginTop: '30px'}}>下面是二级路由页面(about/...)-------
                    <Switch>
                        <Route path="/about/:id" component={Phone} />
                        {/*<Route path="/about/content" component={Content} />*/}
                    </Switch>
                </div>
            </div>
        )
    }
}






