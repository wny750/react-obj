import React,{Component} from 'react';
import "../assets/css1/login.css"
import {Link} from 'react-router-dom'
import {asyncAction} from "../store/asyncAction"
import * as types from "../store/types"
import connect from "react-redux/es/connect/connect"

class Login extends Component{
    state={
        username:"",
        password:"",
        mess:""
    }
    render(){
        return (
            <div className="login">
               
                <div className="box">
                    <form action="" method="post">
                        <div className="row">
                            <input 
                            type="text" className="loginName" name="mobile" placeholder="请输入账号" 
                            value={this.state.username}
                            onChange={(ev)=>this.setState({username:ev.target.value})}
                            />
                            <i className="iconfont icon-erji-yonghuguanli"></i>
                        </div>
                        <div className="row">
                            <input
                             value={this.state.password}
                             onChange={(ev)=>this.setState({password:ev.target.value})}
                             type="password" className="checkLoginBut" name="pwd" placeholder="请输入密码"/>
                            <i className="iconfont icon-icon-"></i>
                            <a className="forgetPassword" href="forgetPassword.html">忘记密码</a>
                        </div>
                        <div className="loginCheckText"></div>
                        <div className="row">
                            <input type="button" className="loginBut" value="登录" 
                            onClick={()=>this.props.login(this.state.username,this.state.password,this)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const initMapDispatchToProps = (dispatch,ownProps)=>({
    login:(username,password,_this) => dispatch(asyncAction({
        url:'/mock/login',
        method:'post',
        data:{username,password},
        typeName:types.UPDATE_USER,
        receipt:true
    })).then(
        res=>{
            console.log(res)
            if(res.err ===0){
                localStorage.setItem("react_user",JSON.stringify(res))
                ownProps.history.push('./user')
            }else{
                _this.setState({mess:res.msg})
            }
        }
    )
})


export default connect(
    null,
    initMapDispatchToProps
)(Login)