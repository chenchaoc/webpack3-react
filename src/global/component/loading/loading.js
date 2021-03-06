/*
* @Author: chenchao
* @Date: 2018-01-17 15:07:47
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-17 16:43:36
*/
import './loading.scss';
export default class extends React.Component {
    constructor(props){
        super(props)
    }
    static defaultProps = {
        isLoading: true
    }
    componentWillReceiveProps(nextProps) {
        
    }
    render(){
        let { isLoading } = this.props;
        return (
            isLoading ? <div className="spinner-fix">
                <div className="spinner-ball">
                    {
                        [1,2,3].map((v,i) => {
                            return <div className="spinner-ball-item" key={i}></div>
                        })
                    }
                </div>
            </div>
            : null
        )
    }
}
