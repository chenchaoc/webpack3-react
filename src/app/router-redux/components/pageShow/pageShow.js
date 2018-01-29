/*
* @Author: chenchao
* @Date: 2018-01-24 11:49:47
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-26 10:02:15
*/
import Psc from './pageShowComponent.js';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            aa: 234
        }
    }
    componentDidMount() {
        console.log(this.props)
        console.log(Object.assign({},{a:1},{b:2}))
    }
    render(){
        const { isLogin, dispatch } = this.props;
        const { allpage, list, currentpage, nextpage } = this.props.pageInfo;
        const { aa } = this.state;

        if(!isLogin){
            return <Redirect to="/" />
        }
        return (
            <div className="pageShow">
                <h3>分页展示</h3>
                <ul className={classnames({hide: allpage<=0})}>
                    {
                        list.map((v,i) => {
                            return (
                                <li key={v.id}>
                                    <span>{v.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={classnames({hide: allpage<=0})}>没有数据了</div>
                <div>{aa}</div>
                <Psc dispatch={dispatch} allpage={allpage} currentpage={currentpage} nextpage={nextpage} />
            </div>
        )
    }
}