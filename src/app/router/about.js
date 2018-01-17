/*
* @Author: chenchao
* @Date: 2018-01-15 14:58:46
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-16 18:31:57
*/

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render(){
        return (
            <div>about</div>
        )
    }
}