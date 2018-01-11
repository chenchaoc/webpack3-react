/*
* @Author: chenchao
* @Date: 2018-01-11 15:28:24
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-11 17:31:11
*/
import { Fragment } from 'react'; //不需要外层包裹了，react提供了功能片段  有点类似vue的template

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <dl>
                {
                    [1,2,3].map((v,i) => {
                        return (
                            <Fragment key={v}>
                                <dt>555</dt>
                                <dd>666</dd>
                            </Fragment>
                        )
                    })
                }
            </dl>
        )
    }
}