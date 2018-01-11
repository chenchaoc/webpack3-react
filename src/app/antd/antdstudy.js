/*
* @Author: chenchao
* @Date: 2018-01-08 15:54:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-11 19:58:42
*/
import { DatePicker } from 'antd';
console.log(DatePicker)

//import DatePicker from 'antd/lib/date-picker';  // 加载 JS
//import 'antd/lib/date-picker/style/css';        // 加载 CSS

export default class extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <DatePicker />
            </div>
        )
    }
}