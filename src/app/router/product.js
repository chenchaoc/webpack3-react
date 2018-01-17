/*
* @Author: chenchao
* @Date: 2018-01-16 11:03:06
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-17 10:49:09
*/
import { Switch, Route, Link, Redirect, Prompt } from 'react-router-dom';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props)    
    }
    componentWillMount() {
        console.log('进入了路由')
    }
    componentWillUpdate(nextProps, nextState) {
        return true
    }
    componentWillUnmount() {
        console.log('离开路由')
    }
    handleClick(){
        //this.props.history.push('/user/add') //这样可以跳转
        this.props.history.push({pathname:'/user/add',search:'c=5',state:{a:3,b:4},a:666}) //这样也可以跳转
    }
    render(){
        return (
            <div>
                <div onClick={() => this.handleClick()}>跳转至useradd</div>
                { this.props.match.params.productId ? <span>productId-------{this.props.match.params.productId}</span> : null}
            </div>
        )
    }
}