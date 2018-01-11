/*
* @Author: chenchao
* @Date: 2018-01-06 13:32:51
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-06 14:02:25
*/
export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imgSrc: ''
        }
    }
    componentDidMount() {
        console.log(this.$dom)
    }
    handleLoad(){
        console.log('加载成功')
    }
    handleError(){
        console.log('加载失败')
    }
    render(){
        return (
            <img 
                src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4235936240,2139684980&fm=58"
                ref={d => this.$dom = d}
                onLoad={() => this.handleLoad()}
                onError={() => this.handleError()}
            />
        )
    }
}