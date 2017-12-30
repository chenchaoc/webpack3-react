/*
* @Author: chenchao
* @Date: 2017-12-28 18:28:44
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2017-12-30 00:22:46
*/
export default class extends React.Component {
    constructor(props){
        super(props)
    }
    static defaultProps = {
        a:111111
    }
    componentDidMount() {
        //console.log(this.props);
        //console.log(React);
        //console.log(cm);
        //console.log(utils);
    }
    render(){
        return (
            <div className="aa">
                <span>hello world</span>
                <div>222233333</div>
                <div>33334443</div>
            </div>

        )
    }
}