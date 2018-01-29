/*
* @Author: chenchao
* @Date: 2018-01-18 14:45:03
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-01-23 11:18:03
*/
import Login from './login.js';
import { connect } from 'react-redux';
import { goLogin } from '../../actions.js';
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        GOLOGIN:function(username,password,history){
            console.log("用户名"+username)
            console.log("密码"+password)
            setTimeout(function(){
                dispatch(goLogin())
                history.push("/home")
            },1000)
            
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);