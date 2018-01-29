/*
* @Author: chenchao
* @Date: 2018-01-22 11:27:14
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-22 11:28:09
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
                <div className="n404">404NotFound</div>
            </Fragment>
        )
    }
}