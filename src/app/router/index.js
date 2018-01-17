/*
* @Author: chenchao
* @Date: 2018-01-15 11:38:25
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-17 16:47:26
*/
import { BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import Layout from './layout.js';
export default class extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }
    render(){
        return (
            <Fragment>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Fragment>
        )
    }
}