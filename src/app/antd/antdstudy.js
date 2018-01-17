/*
* @Author: chenchao
* @Date: 2018-01-08 15:54:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-17 11:27:47
*/

//import { DatePicker } from 'antd';
//console.log(DatePicker)
//import DatePicker from 'antd/lib/date-picker';  // 加载 JS
//import 'antd/lib/date-picker/style/css';        // 加载 CSS

export default class extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log(utils.isMobile(13576519313))
        //console.log(utils)
    }
    render(){
        return(
            <div>
                222
                <span>3333</span>
                <div>777</div>
                <div>777</div>
                <div>777444444</div>
                <div>888</div>
                <div>333</div>
                <div>222</div>
            </div>
        )
    }
}