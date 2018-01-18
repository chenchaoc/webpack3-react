/*
* @Author: chenchao
* @Date: 2018-01-18 14:44:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 17:09:06
*/
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
                <h3>登录页面</h3>
                <div>
                    用户名<input type="text" ref="username" />
                </div>
                <div>
                    密码<input type="password" ref="password" />
                </div>
                <div>
                    <button onClick={() => this.goLogin()}>登录</button>
                </div>
            </div>
        );
    }
}