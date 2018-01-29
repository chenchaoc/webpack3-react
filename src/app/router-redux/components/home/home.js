/*
* @Author: chenchao
* @Date: 2018-01-18 16:44:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-24 11:35:32
*/
import { Redirect } from 'react-router-dom';
import { outLogin } from '../../actions.js'
export default class Home extends React.Component {
    outLogin(){
        this.props.dispatch(outLogin());
        this.props.history.push('/');
    } 
    componentDidMount() {
        console.log("Home渲染完毕")
        console.log(this.props)
    }    
    render() {
/*        if(this.props.isLogin==false){
            return <Redirect to="/" />
        }*/
        return (
            <div>
                <h3>home页面</h3>
                <div>
                    <button onClick={() => this.outLogin()}>退出登录</button>
                </div>
            </div>
        );
    }    
}