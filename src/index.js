import React from 'react';
import ReactDom from "react-dom";
import App from "./layouts/App";
import {BrowserRouter,Route} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import axios from "./utils/axios";


let local = localStorage.getItem('react_user') ? JSON.parse(localStorage.getItem('react_user')) : null;
    if(local) store.dispatch({type:'UPDATE_USER',payload:local})
    else store.dispatch({type:"UPDATE_USER",payload:{err:1}})

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
)