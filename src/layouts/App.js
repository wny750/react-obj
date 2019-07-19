import React from 'react';
// import ReactDom from 'react-dom';
import Home from "../pages/Home"
import Header from './Header'
import Footer from './Footer'
import Detail from "../pages/Detail"
import Rank from "../pages/Rank"
import User from "../pages/User"
import Search from "../pages/Search"
import Login from "../pages/Login"
import ErrorPage from "../pages/ErrorPage"
import {Switch,Route,Redirect} from "react-router-dom"
import "../assets/css1/iconfont.css"


class App extends React.Component{
    componentWillReceiveProps(nextProps){
        console.log("app",nextProps.location.pathname)
    }
    render(){
        return (
            <div className="App">
                <Header />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/rank" component={Rank} />
                        <Route path="/user" component={User} />
                        <Route path="/search" component={Search} />
                        <Route path="/login" component={Login} />
                        <Redirect exact from ="/" to="/home" />
                        <Route component={ErrorPage} />
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default App