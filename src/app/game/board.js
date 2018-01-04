/*
* @Author: chenchao
* @Date: 2018-01-02 16:37:55
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-02 17:08:01
*/
import Square from './square.js';

export default class extends React.Component {
    renderSquare(i){
        return <Square value={i} />
    }
    render(){
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row clearfix">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row clearfix">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row clearfix">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>                                
            </div>
        )
    }
} 