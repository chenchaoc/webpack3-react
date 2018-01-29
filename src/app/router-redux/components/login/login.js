/*
* @Author: chenchao
* @Date: 2018-01-18 14:44:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-29 10:44:53
*/
import './login.scss'; //根匹配路径必须Import一个css 否则js一直报错？？
import classnames from 'classnames';
import PreImg from '@globalcomponent/pre-img/pre-img.js';
console.log(PreImg)

export default class extends React.Component {
    goLogin(){
        this.props.GOLOGIN(this.refs.username.value,this.refs.password.value,this.props.history);
    }
    
    componentDidMount() {
        console.log("Login渲染完毕")
    }
    render() {
        return (
            <div>
                <h3 className={classnames({a:true})}>我是登录页面</h3>
                <div>
                    用户名<input type="text" ref="username" />
                </div>
                <div>
                    密码<input type="password" ref="password" />
                </div>
                <div>
                    <button onClick={() => this.goLogin()}>点击登录</button>
                </div>
                <div style={{width:'100px',height:'100px'}}>
                    <PreImg src="http://www.chenchaoc.top/cc.jpeg" errorSrc="https://www.baidu.com/img/baidu_jgylogo3.gif" />
                </div>   
            </div>
        );
    }
}