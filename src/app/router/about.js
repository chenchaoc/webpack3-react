/*
* @Author: chenchao
* @Date: 2018-01-15 14:58:46
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-22 11:23:15
*/
import { Fragment } from 'react';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render(){
        return (
            <Fragment>
                <div className="about">about</div>
            </Fragment>
        )
    }
}