/*
* @Author: chenchao
* @Date: 2018-01-02 16:38:06
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-02 18:45:33
*/
import './game.scss';
import Board from './board.js';
//import Test from './test.js';

export default class extends React.Component {
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                    {/*<Test />*/}
                </div>
            </div>
        )
    }
}