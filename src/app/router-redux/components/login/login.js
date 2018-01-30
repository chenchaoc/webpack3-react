/*
* @Author: chenchao
* @Date: 2018-01-18 14:44:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-30 17:00:46
*/
import './login.scss'; //根匹配路径必须import一个css 否则js一直报错？？
import classnames from 'classnames';
import PreImg from '@globalcomponent/pre-img/pre-img.js';
import { goLogin } from '../../actions.js'
//import wechatShare from 'wechat';
//console.log(wechatShare);
//console.log(wechat.share({}));
//class Point {
//    constructor(x,y){
//        this.x = x;
//        this.y = y; //定义在实例上的属性
//    }
//    toString(){ //定义在原型上的方法
//        console.log(`${this.x}-${this.y}`)
//    }
//}
//
//
//let a = new Point(1,2)
//console.log(a.constructor)
//a.toString();
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

export default class extends React.Component {
    state = {
        a: 1
    }
    goLogin(){
        const { dispatch, history } = this.props;
        console.log("用户名"+this.refs.username.value);
        console.log("密码"+this.refs.password.value);
        dispatch(goLogin());
        history.push('/home');
    }
    componentDidMount() {
        console.log("Login渲染完毕")
        console.log(this.state.a)
    }
    render() {
        return (
            <div>
                <h3>我是登录页面</h3>
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
                <div style={{width:'100px',height:'100px'}}>
                    <PreImg src="http://www.chenchaoc.top/cc.jpeg" errorSrc="https://www.baidu.com/img/baidu_jgylogo3.gif" />
                </div>   
            </div>
        );
    }
}