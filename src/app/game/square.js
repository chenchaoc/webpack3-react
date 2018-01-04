/*
* @Author: chenchao
* @Date: 2018-01-02 16:37:43
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-02 16:57:16
*/

import './square.scss';
import PropTypes from 'prop-types';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    static propTypes = {
        value: PropTypes.number
    }
    render(){
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}