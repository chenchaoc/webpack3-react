/*
* @Author: chenchao
* @Date: 2018-01-23 11:01:52
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-23 15:41:21
*/
import { Redirect } from 'react-router-dom';
import { sortNews } from '../../actions.js';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    sortN(){
        console.log(this.props)
        this.props.dispatch(sortNews())
    }
    render(){
        if(!this.props.isLogin){
            return <Redirect to="/" />
        }
        return (
            <div className="news">
                <ul>
                    <h3>新闻页面</h3>
                    { this.props.newsList.map((v,i) => {
                        return <li key={v.id}>
                            <a>{v.title}</a>-------------------------
                            <span>{v.con}</span>
                        </li>
                    })}
                </ul>
                <button onClick={() => this.sortN()}>点击新闻倒序排列</button>
            </div>
        )
    }
}