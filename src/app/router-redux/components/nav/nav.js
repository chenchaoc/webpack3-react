/*
* @Author: chenchao
* @Date: 2018-01-18 14:48:05
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-03-29 17:39:57
*/
import { Route, Link, Switch } from 'react-router-dom';

export default class extends React.Component {
    componentDidMount() {
        //console.log(this.props)
    }
    render(){
        return (
            <ul style={{display:this.props.isLogin?"block":"none"}}>这是只有登录才看得到的nav导航页面-------
                <li style={{display:this.props.isLogin?"none":"block"}}>
                    <Link to="/">登录</Link>
                </li>
                <li>
                    <Link to="/home">主页</Link>
                </li>
                <li>
                    <Link to="/about">关于我们</Link>
                </li>
                <li>
                    <Link to="/news">新闻页面</Link>
                </li>
                <li>
                    <Link to="/pageShow">分页演示</Link>
                </li>
            </ul>            
        )
    }
}