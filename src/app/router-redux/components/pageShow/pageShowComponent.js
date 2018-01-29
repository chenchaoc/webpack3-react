/*
* @Author: chenchao
* @Date: 2018-01-24 11:50:28
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-26 10:23:54
*/
import classnames from 'classnames';
import { getList } from '../../actions.js';
import './pageShowComponent.scss';

export default class extends React.Component {
    constructor(props){
        super(props);
    }
    diFirst(){
        let { dispatch, currentpage } = this.props;
        if(currentpage <= 1){
            return false
        }
        dispatch(getList({currentpage: 1}))
    }
    diPrev(){
        let { dispatch, currentpage } = this.props;
        if(currentpage - 1 < 1){
            return false
        }
        dispatch(getList({currentpage: Number(currentpage) - 1}))
    }
    diCurrent(v){
        let { dispatch } = this.props;
        dispatch(getList({currentpage: v}))        
    }
    diNext(){
        let { dispatch, currentpage, allpage } = this.props;
        if(currentpage >= allpage){
            return false
        }
        dispatch(getList({currentpage: Number(currentpage) + 1}))        
    }
    diLast(){
        let { dispatch, currentpage, allpage } = this.props;
        if(currentpage >= allpage){
            return false
        }
        dispatch(getList({currentpage: allpage}))
    }
    diSkip(){
        let { dispatch } = this.props;
        dispatch(getList({currentpage: this.refs.Cpage.value}))
    }
    render(){
        let { currentpage, allpage } = this.props,
            pages = [];
        if(allpage >= 5){
            if(currentpage+5>allpage){
                for(let i=currentpage;i<allpage;i++){
                    pages.push(i)
                }
            }else{
                for(let i=currentpage;i<currentpage+5;i++){
                    pages.push(i)
                }
            }
        }else{
            for(let i=currentpage;i<allpage;i++){
                pages.push(i)
            }
        }
        return (
            <div className="page-show-component">
                <span>
                    {
                        pages.map((v,i) => {
                            return <span key={i} className={classnames({active: currentpage == v})} onClick={() => this.diCurrent(v)}>{v}</span>
                        })
                    }
                </span>
                <span onClick={() => this.diFirst()} className={classnames({disable:currentpage == 1})}>第一页 </span>
                <span onClick={() => this.diPrev()} className={classnames({disable:currentpage == 1})}>上一页 </span>                
                <span onClick={() => this.diNext()} className={classnames({disable:currentpage == allpage})}>下一页 </span>
                <span onClick={() => this.diLast()} className={classnames({disable:currentpage == allpage})}>最后一页 </span>
                <span>总共{allpage}页 </span>
                <input type="text" ref="Cpage" />
                <button onClick={() => this.diSkip()}>跳转</button>
            </div>
        )
    }
}