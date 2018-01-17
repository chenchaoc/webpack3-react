/*
* @Author: chenchao
* @Date: 2018-01-02 17:41:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-15 10:48:23
*/

import './test.scss';
const src2 = require('./a.jpg'); //同步加载图片
import src3 from './a.jpg'; //异步
console.log('src3------',src3)
console.log(111)
console.log('src2------',src2)
console.log(222)


export default class extends React.Component {
    render(){
        return (
            <div className="wraper">
                <div className="item">
                    <img className="img" src={src2} alt=""/>
                    <p className="word">这是商品1</p>
                </div>
                <div className="item">
                    <img className="img" src={src3} alt=""/>
                    <p className="word">这是商品2</p>
                </div>
                <div className="item">
                    <img className="img" src={src2} alt=""/>
                    <p className="word">这是商品3</p>
                </div>                
            </div>
        )
    }
}
