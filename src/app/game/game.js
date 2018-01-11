/*
* @Author: chenchao
* @Date: 2018-01-02 16:38:06
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-09 17:17:22
*/
import './game.scss';
import Board from './board.js';
//import Test from './test.js';
//import Preimg from '@globalcomponent/pre-img/pre-img.js';

function jsWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return {winner:squares[a],line:[a,b,c]};
        }
      }
      return {winner:null,line:[]};
}

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            history: [{
                squares: new Array(9).fill(null),
                lastStep: 'Game start',
            }],
            xIsNext: true,
            stepNumber: 0,
            sort: false
        }
    }
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber+1); //悔棋之后能够重新下棋
        const current = history[this.state.stepNumber]; // 
        const squares = current.squares.slice(); //数组数据浅拷贝,react数据不可变性很重要
        const location = `(${Math.floor(i/3)+1},${(i%3)+1})`;   
        //debugger  
        if(jsWinner(squares).winner || squares[i]){
            return //赢了或者已经有值不能点击了
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const desc = squares[i] + ' moved to ' + location;
        this.setState({
            history: history.concat([{
                squares: squares,
                lastStep: desc
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        })
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true

        })
    }
    sortClick(){
        this.setState({
            sort: !this.state.sort
        })
    } 
    render(){
        let { history, xIsNext, stepNumber } = this.state;
        const current = history[stepNumber];
        const winner = jsWinner(current.squares).winner;
        const winnerLine = jsWinner(current.squares).line;

        if(this.state.sort){
            history = this.state.history.slice();
            history.reverse();
        }
        //console.log(history)

        const moves = history.map((step,move) => {
            const desc = step.lastStep;
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            )
        })
        let status;
        if(winner){
            status = `Winner: ${winner}`;
        }else{
            status = `Next player: ${xIsNext ? 'X' : 'O'}`;
        }       
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} winnerLine={winnerLine} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.sortClick()}>sort</button>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}