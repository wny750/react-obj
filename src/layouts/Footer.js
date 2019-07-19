import React from 'react';
// import ReactDom from 'react-dom';
import "../assets/css1/base.css"
import "../assets/css1/footer.css"
import {Link,NavLink,Route} from "react-router-dom"



class Footer extends React.Component{
    render(){
        return (
            <div className="bottom">
                <ul>
                    <li className="active">
                        <NavLink to="/home">
                            <img src="./assets/images/bottom_menu_1_hover.png"/>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                            <img src="./assets/images/bottom_menu_2.png"/>
                            <p>分类</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/detail">
                            <img src="./assets/images/bottom_menu_5.png"/>
                            <p>常用清单</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rank">
                            <img id="menuGoodsNumTag" src="./assets/images/bottom_menu_3.png"/>
                            <p>购物车</p>
                            <span id="menuGoodsNum" className="goodsNum">2</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">
                            <img src="./assets/images/bottom_menu_4.png"/>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer