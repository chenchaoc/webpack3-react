/*
* @Author: chenchao
* @Date: 2018-01-02 16:37:43
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-09 16:35:58
*/

import './square.scss';
import PropTypes from 'prop-types';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    static propTypes = {
        value: PropTypes.string,
        //highlight: PropTypes.boolean

    }
    componentWillMount() {
        //console.log(this.props);
    }
    handleClick(){
        this.props.onClick();
    }
    render(){
        let { highlight } = this.props;
        if(highlight){
            return (
                <button className="square" onClick={() => this.handleClick()} style={{color:'red'}}>
                    {this.props.value}
                </button>
            )
        }else{
            return (
                <button className="square" onClick={() => this.handleClick()}>
                    {this.props.value}
                </button>
            )
        }
    }
}