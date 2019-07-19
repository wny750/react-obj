import React from 'react';
// import ReactDom from 'react-dom';
import "../assets/css1/header.css"
import "../assets/css1/base.css"



class Header extends React.Component{
    render(){
        return (
            <div className="top">
                <div className="shop">
                    <div className="shop_name">
                        <span><i className="iconfont icon-shangdian"></i><font>穷在闹市</font></span>
                    </div>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="快速搜索商品" 
                    // onClick 
                    readOnly="readonly"/>
                </div>
            </div>
        )
    }
}

export default Header