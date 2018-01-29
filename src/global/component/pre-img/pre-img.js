/*
* @Author: chenchao
* @Date: 2018-01-06 13:32:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-29 10:39:21
*/
/*
举个栗子
<PreImg src="http://www.chenchaoc.top/cc.jpeg" errorSrc="https://www.baidu.com/img/baidu_jgylogo3.gif" />
src  必传
errorSrc  非必传
 */
import './pre-img.scss';
import PropTypes from 'prop-types';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            src: this.props.src ? this.props.src : ''
        }
    }
    static propTypes = {
        src: PropTypes.string, //加载成功图片
        errorSrc: PropTypes.string  //加载失败占位底图
    }
    static defaultProps = {
        errorSrc: 'http://house-test-water.oss.aliyuncs.com/resource/iwjw-pc_test/img/common/placeholder.png'
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.src != this.props.src){
            this.setState({
                src: nextProps.src
            })            
        }
    }
    handleError(){
        const { errorSrc } = this.props;
        this.setState({
            src: errorSrc
        })     
    }
    render(){
        const { src } = this.state;
        return (
            <img 
                className="pre-img-component"
                src={ src }
                onError={() => this.handleError()}
            />
        )
    }
}