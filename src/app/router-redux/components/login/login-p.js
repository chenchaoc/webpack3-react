/*
* @Author: chenchao
* @Date: 2018-02-09 16:16:07
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-02-09 16:50:42
*/
import { Fragment } from 'react';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { list, change } = this.props;
        return (
            <ul>
                { list.length > 0 ? 
                    list.map((v,i) => {
                        return <li key={i}>{v}</li>
                    })
                 : null }
                 <li onClick={change}>涨涨涨</li>
            </ul>
        )
        
    }
}