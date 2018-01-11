/*
* @Author: chenchao
* @Date: 2018-01-02 16:37:55
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-09 16:30:06
*/
import Square from './square.js';

export default class extends React.Component {
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        //console.log(nextProps);
        //console.log(nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        //console.log(prevProps);
        //console.log(prevState);        
    }
    componentDidMount() {
        //console.log(this.props)
    }
    renderSquare(i){
        return (
            <Square
                key={i}
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)} 
                highlight={this.props.winnerLine.includes(i)}
            />
        )
    }
    render(){
        let rows = [];
        for(let i=0;i<3;i++){
            let row = [];
            for(let j=i*3;j<i*3+3;j++){
                row.push(this.renderSquare(j));
            }
            rows.push(<div key={i} className="board-row clearfix">{row}</div>)
        }
        return (
            <div>
                {rows}
            </div>
        )
    }
} 