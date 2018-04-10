/*
* @Author: chenchao
* @Date: 2018-01-18 14:44:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-03-30 16:04:34
*/
import './login.scss'; //根匹配路径必须import一个css 否则js一直报错？？
import classnames from 'classnames';
import PreImg from '@globalcomponent/pre-img/pre-img.js';
import { goLogin } from '../../actions.js';
import {Redirect,Switch,Link,Route} from 'react-router-dom';
import LoginP from './login-p.js';
import axios from 'axios';

class Point {
   constructor(x,y){
       this.x = x;
       this.y = y; //定义在实例上的属性
   }
   toString(){ //定义在原型上的方法
       console.log(`${this.x}-${this.y}`)
   }
}


let a = new Point(1,2)
console.log(a.constructor)
a.toString();

//console.log(Object.getPrototypeOf(a)); //获取构造函数的原型对象
//console.log(Point.prototype) //构造函数 构造函数Point(.prototype是原型)<---->(.constructor是构造函数)原型Point.prototype
//console.log(a.constructor)  //构造函数Point(a.constructor)<----->(new 构造函数Point)实例
//console.log(Point.constructor.__proto__.__proto__.constructor)

//class Parent {}
//class Sub extends Parent {}
//
//
//let b = new Sub();
//
//console.log(b.constructor)
//console.log(Sub.prototype.__proto__.constructor)
//console.log(Sub.__proto__)
//console.log(Sub.constructor)
/*function* aa(){
    (yield cm.ajax('http://fe.iwjw.com:8888/api/fete_api/6JzDxS/eIJyfd/mock/ailicai/getMemberRiskEvaluationByUserId.rest'))
}
function* bb(){
    (yield cm.ajax('http://fe.iwjw.com:8888/api/fete_api/6JzDxS/eIJyfd/mock/ailicai/bankcardDetail.rest'))
}
function* cc(){
    (yield cm.ajax('http://fe.iwjw.com:8888/api/fete_api/6JzDxS/eIJyfd/mock/ailicai/getOpenAccountInfo.rest'))
}
cm.ajaxOrder(
    aa(),
    bb(),
    cc(),
).then((a) => {
    console.log(a)
})*/
export default class extends React.Component {
    state = {
        list: ['aa','bb','cc']
    }
    goLogin(){
        const { dispatch, history } = this.props;
        console.log("用户名"+this.refs.username.value);
        console.log("密码"+this.refs.password.value);
        dispatch(goLogin());
        history.push('/home');
    }
    * dd(){
        (yield cm.ajax('http://fe.iwjw.com:8888/api/fete_api/6JzDxS/eIJyfd/mock/ailicai/getMemberRiskEvaluationByUserId.rest')).then(() => {
            console.log(11)
        }).then(() => {
            console.log(44)
        })
    }
    * ee(){
        (yield cm.ajax('http://fe.iwjw.com:8888/api/fete_api/6JzDxS/eIJyfd/mock/ailicai/bankcardDetail.rest')).then(() => {
            console.log(22)
        })
    }
    * ff(){
        (yield cm.ajax('http://fe.iwjw.com:8888/api/fete_api/6JzDxS/eIJyfd/mock/ailicai/getOpenAccountInfo.rest')).then(() => {
            console.log(33)
        })
    }  
    componentDidMount() {
        //console.log("Login渲染完毕")
        //console.log(this.props)
        //console.log(this.state.a)
        cm.ajaxOrder(this.dd(),this.ee(),this.ff())
    }
    changeList(){
        let { list } = this.state
        this.setState({
            list: [...list,'dd']
        })
    }
    render() {
        return (
            <div>
                <h3 ref={d => (this.dom = d)}>我是登录页面</h3>
                <i className={classnames('iconfont',{'if-close':true})} style={{color:'blue'}}></i>
                <div>
                    用户名<input type="text" ref="username" />
                </div>
                <div>
                    密码<input type="password" ref="password" />
                </div>
                <div>
                    <button onClick={() => this.goLogin()}>点击登录</button>
                </div>
                <div className="img-box" style={{width:'100px',height:'100px'}}>
                    <PreImg src="http://www.chenchaoc.top/cc.jpeg" placeHolder="https://www.baidu.com/img/baidu_jgylogo3.gif" fitModel="cover" />
                </div>
                <LoginP list={this.state.list} change={() => this.changeList()}></LoginP>
            </div>
        );
    }
}