/*
* @Author: chenchao
* @Date: 2018-01-06 13:32:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-02-09 10:56:56
*/
/*
举个栗子
<PreImg src="http://www.chenchaoc.top/cc.jpeg" errorSrc="https://www.baidu.com/img/baidu_jgylogo3.gif" />
src  必传
errorSrc  非必传
 */
import PropTypes from 'prop-types';
/**
 * 计算cover相对位置
 */
function coverResize(height, width, parentH, parentW) {
  const pK = parentH / parentW; // 父斜率
  const iK = height / width; // 子斜率
  const offset = pK - iK; // 斜率差

  return offset <= 0
    ? {
        width: "100%",
        height: "auto",
        marginTop: parentW * (pK - iK) / 2 + "px"
      }
    : {
        width: "auto",
        height: "100%",
        marginLeft: (parentW - parentH / height * width) / 2 + "px"
      };
}

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            src: this.props.src ? this.props.src : ''
        }
    }
    static propTypes = {
        src: PropTypes.string, //加载成功图路径
        errorSrc: PropTypes.string,  //加载失败占位图路径
        fitModel: PropTypes.oneOf(['cover']), //图片填充模式
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