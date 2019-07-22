import React,{Component} from 'react';
import "../assets/css1/user.css";

class User extends Component{
    render(){
        // let data=this.props.data.data
        // let {data:{nikename,icon}} = this.props.userdata;
        console.log(this.props)
        return (
            <div>
                <div className="myCenterTop">
                        {/* <img src={icon} />
                        <p>{{nikename}}</p> */}
                        <a href="merchantInfo.html"><i className="iconfont icon-shezhi"></i></a>
                    </div>
                {/* <!-- 头部区域 - 结束 --> */}

                {/* <!-- 账户余额 - 开始 --> */}
                <div className="accountBalance">
                    <ul>
                        <li><a href="order.html">
                            <i>0.00</i>
                            <p>余额</p>
                        </a></li>
                        <li><a href="order.html">
                            <i>0.00</i>
                            <p>返利</p>
                        </a></li>
                        <li><a href="order.html">
                            <i>0.00</i>
                            <p>欠款</p>
                        </a></li>
                        <li className="last" 
                        // style={{background: url(./assets/images/myOrder_bg.png) no-repeat left; width: 20%}}
                        >
                            <a href="accountBalance.html">
                            <i className="iconfont icon-daifukuan"></i>
                            <p>我的钱包</p>
                        </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- 账户余额 - 结束 --> */}

                {/* <!-- 我的订单 - 开始 --> */}
                <div className="myOrder">
                    <div className="con">
                        <ul>
                            <li><a href="order.html">
                                <i className="iconfont icon-daifukuan"></i>
                                <p>待付款</p>
                            </a></li>
                            <li><a href="order.html">
                                <i className="iconfont icon-baoguofahuo"></i>
                                <p>待发货</p>
                            </a></li>
                            <li><a href="order.html">
                                <i className="iconfont icon-distribution"></i>
                                <p>配送中</p>
                            </a></li>
                            <li><a href="order.html">
                                <i className="iconfont icon-yishouhuo"></i>
                                <p>已完成</p>
                            </a></li>
                            <li className="te123"
                            // style="background: url(./assets/images/myOrder_bg.png) no-repeat left;"
                            >
                                <a href="orderAllList.html">
                                <i className="iconfont icon-dingdan"></i>
                                <p>我的订单</p>
                            </a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- 我的订单 - 结束 --> */}

                {/* <!-- 常用功能 - 开始 --> */}
                <div className="tools">
                        <h1>常用工具</h1>
                        <ul>
                            <li><a href="sysMessage.html"><i className="iconfont icon-xiaoxi1 color1"></i><p>消息中心</p></a></li>
                            <li><a href="feedback.html"><i className="iconfont icon-iconyijianfankui color2"></i><p>意见反馈</p></a></li>
                            <li><a href="javascript:openTc('hotLine','400 600 1111','tel:400 600 1111','取消','呼叫')"><i className="iconfont icon-kefu1 color2"></i><p>客服热线</p></a></li>
                            <li><a href="aboutUs.html"><i className="iconfont icon-guanyuwomen color1"></i><p>关于我们</p></a></li>
                            <li><a href="modifyPassword.html"><i className="iconfont icon-lock color1"></i><p>修改密码</p></a></li>
                            <li><a href="cashCoupon.html"><i className="iconfont icon-youhuiquan color2"></i><p>优惠券</p></a></li>
                        </ul>
                    </div>
                {/* <!-- 常用功能 - 结束 --> */}

                <div className="h_58"></div>
            </div>
        )
    }
}

export default User