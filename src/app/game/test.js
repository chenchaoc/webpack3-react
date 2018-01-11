/*
* @Author: chenchao
* @Date: 2018-01-02 17:41:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-11 11:54:04
*/

import './test.scss';

export default class extends React.Component {
    render(){
        let src = require('./a.jpg');
        return (
            <div className="wraper">
                <div className="item">
                    <img className="img" src={src} alt=""/>
                    <p className="word">这是商品1</p>
                </div>
                <div className="item">
                    <img className="img" src={src} alt=""/>
                    <p className="word">这是商品2</p>
                </div>
                <div className="item">
                    <img className="img" src={src} alt=""/>
                    <p className="word">这是商品3</p>
                </div>                
            </div>
        )
    }
}
