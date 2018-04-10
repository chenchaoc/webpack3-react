/*
* @Author: chenchao
* @Date: 2018-01-18 18:36:36
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-31 17:14:52
*/
import './about-phone.scss';
import {Redirect,Switch,Link,Route} from 'react-router-dom';
const Aaa = cm.asyncComponent(() => import(/* webpackChunkName: "async-react-about-phone-aaa" */ './about-phone-aaa.js'));

export default class Phone extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
  render() {
    return(
        <div>
            <div>我是about/phone页面{this.props.match.params.id}</div>
            <Link to="/about/phone/aaa">点击进入三级路由(/about/phone/aaa)</Link>
            <div style={{marginTop: '30px'}}>下面是三级路由页面(Aaa)------------
                <Route path="/about/phone/aaa" component={Aaa} />
            </div>
        </div>
    ) 
  }
}