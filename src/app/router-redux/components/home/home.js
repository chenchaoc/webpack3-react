/*
* @Author: chenchao
* @Date: 2018-01-18 16:44:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-18 17:17:48
*/
import {Redirect} from 'react-router-dom';

export default class Home extends React.Component {
    outLogin(){
        this.props.OUTLOGIN(this.props.history);
    } 
    componentDidMount() {
        console.log("Home渲染完毕")
        console.log(this.props)
    }    
    render() {
        if(this.props.isLogin==false){
            return <Redirect to="/" />
        }
        
        return (
            <div>
                <h3>home主页</h3>
                <div>
                    <button onClick={() =>this.outLogin()}>退出登录</button>
                </div>
            </div>
        );
    }    
}