/*
* @Author: chenchao
* @Date: 2017-12-28 14:38:02
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-19 23:00:23
*/
import axios from 'axios';
import Loading from '@globalcomponent/loading/loading.js';
import { Fragment } from 'react';

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
 * [此函数为代码分割|按需加载,importComponent为异步加载]
 * [asyncComponent description]
 * @param  {[function]} importComponent [description]
 * @param  {[object]} p                 [description]
 * @return {[component]}                [description]
 * https://github.com/thejameskyle/react-loadable 这个是别人写的代码分割插件
 * 实测发现必须在根路由 也就是‘/’ import一次scss文件，否则进入二级路由会报错？？
 */
export function asyncComponent(importComponent,isLoad=true,delay=500) {
    class AsyncComponent extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                component: null,
                isLoading: isLoad
            }            
        }
        async componentDidMount() {
            const {default: component} = await importComponent()
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    component
                })
            }, delay)
        }
        render(){
            const C = this.state.component;
            const { isLoading } = this.state;
            return (
                <Fragment>
                    <Loading isLoading={isLoading} />
                    { C ? <C {...this.props} /> : null }
                </Fragment>
            )
        }
    }
    return AsyncComponent
}



