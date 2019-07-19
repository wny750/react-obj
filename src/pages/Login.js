import React,{Component} from 'react';
import ReactDom from 'react-dom';
import "../assets/css1/login.css"

class Login extends Component{
    render(){
        return (
            <div class="login">
                <div class="box">
                    <form action="" method="post">
                        <div class="row">
                            <input type="text" class="loginName" name="mobile" placeholder="请输入手机号" maxlength="11"/>
                            <i class="iconfont icon-erji-yonghuguanli"></i>
                        </div>
                        <div class="row">
                            <input type="password" class="checkLoginBut" name="pwd" placeholder="请输入密码"/>
                            <i class="iconfont icon-icon-"></i>
                            <a class="forgetPassword" href="forgetPassword.html">忘记密码</a>
                        </div>
                        <div class="loginCheckText"></div>
                        <div class="row">
                            <input type="submit" class="loginBut" value="登录" disabled="disabled"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login