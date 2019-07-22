import React,{Component} from 'react';
// import ReactDom from 'react-dom';

import Home from "../pages/Home"
import Header from './Header'
import Footer from './Footer'
import Detail from "../pages/Detail"
import User from "../pages/User"
import Login from "../pages/Login"
import ErrorPage from "../pages/ErrorPage"

import {Switch,Route,Redirect} from "react-router-dom"

import "../assets/css1/iconfont.css"
import "../assets/css1/base.css"
import "../assets/css1/index.css"

import "../library/font"
import * as types from "../store/types"
import connect from "react-redux/es/connect/connect"
import AuthUser from "../gurds/AuthUser"
// import asyncComponent from "../utils/asyncComponent"//后面加Follow
// import lodable from "react-lodable" //后面加Column


class App extends Component{
    
    checkPath(path){
        if(/home|detail/.test(path)){
            this.props.viewNav(true);
            this.props.viewFoot(true);
        }
        if(/login|reg|user/.test(path)){
            this.props.viewNav(false);
            this.props.viewFoot(true);
        }
    }
    componentWillReceiveProps(nextProps){
        // console.log("app",nextProps.location.pathname)
        let path = nextProps.location.pathname;
        this.checkPath(path)
    };
    componentDidMount(){
        let path = this.props.location.pathname;
        this.checkPath(path)
    }
    
    render(){
        let {bLoading,bFoot,bNav} = this.props;
        return (
            
            <div className="App">
                    {/* {bLoading && <Loading />} */}
                    {bNav && <Header />}
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/detail/:id" component={Detail} />
                        {/* <AuthUser path="/user" component={User} /> */}
                        <Route path="/user" component={User} />
                        <Route path="/login" component={Login} />
                        <Redirect exact from ="/" to="/home" />
                        <Route component={ErrorPage} />
                    </Switch>
                    {bFoot ? <Footer /> :null}
            </div>
        )
    }
}

const initMapStateToProps = state =>({
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading,
});

const initMapDispatchToProps =dispatch=>({
    viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
})


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(App)
