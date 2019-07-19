import React from "react";
import "../assets/css1/commonList.css"


class List1 extends React.Component{
    render(){
        return (
        <div>
        <div className="classMenu_box">
            <div className="classMenu">
                <ul>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-huluobu color1"></i>
                            <p>HTML</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-icon-test2 color2"></i>
                            <p>CSS</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-xiangjiao color3"></i>
                            <p>JS</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-icon-test color4"></i>
                            <p>Jquery</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-dadou color5"></i>
                            <p>Bootstrap</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-binggangaodian color6"></i>
                            <p>Vue</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-haixian color7"></i>
                            <p>HTML5</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-rou color8"></i>
                            <p>CSS3</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-tiaoliao color9"></i>
                            <p>PS</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:classifyUIR('${goodstype.id}','${status.index}')">
                            <i className="iconfont icon-icon-test1 color10"></i>
                            <p>Win</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="commonList">
            <div className="title">
                <font>新品推荐</font>
            </div>
            <div className="con">
                <div className="menu">
                    <div className="wrapper wrapper03" id="commonList">
                        <div className="scroller">
                            <ul className="clearfix">
                                <li><a href="javascript:void(0)" id="">UI</a></li>
                                <li><a href="javascript:void(0)" id="">前端</a></li>
                                <li><a href="javascript:void(0)" id="">Java</a></li>
                                <li><a href="javascript:void(0)" id="">测试</a></li>
                                <li><a href="javascript:void(0)" id="">实施</a></li>
                                <li><a href="javascript:void(0)" id="">运维</a></li>
                                <li><a href="javascript:void(0)" id="">架构师</a></li>
                                <li><a href="javascript:void(0)" id="">项目经理</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }

}


export default List1