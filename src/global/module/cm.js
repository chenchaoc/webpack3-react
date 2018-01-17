/*
* @Author: chenchao
* @Date: 2017-12-28 14:38:02
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-16 19:53:02
*/
import axios from 'axios';

/**
 * [公共ajax]
 * @param  {String} url  [请求url]
 * @param  {Object} data [请求参数]
 * @return {Promise}     [返回结果]
 */
export function ajax(url,data={}){
    return axios.post(url,data).then(res => res.data)
}
/**
 * [代码分割,异步加载组件]
 * [asyncComponent description]
 * @param  {[function]} importComponent [description]
 * @param  {[object]} p                 [description]
 * @return {[component]}                [description]
 */
export function asyncComponent(importComponent) {
    class AsyncComponent extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                component: null
            }            
        }
        async componentDidMount() {
            const {default: component} = await importComponent()
            this.setState({
                component
            })
        }
        render(){
            const C = this.state.component;
            return C ? <C {...this.props} /> : null
        }
    }
    return AsyncComponent
}

