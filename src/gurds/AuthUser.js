import React from 'react';
import {Route, Redirect} from 'react-router-dom'

import connect from "react-redux/es/connect/connect";

const  AuthUser = ({userdata,component:User, ...rest}) => (
  <Route {...rest} render={(rest)=>(
    userdata.err === 0 ?
      <User {...rest} userdata={userdata}/> :
      <Redirect to="/user" />
  )}/>
);


const initMapStateToProps = state => ({
  userdata:state.user,
});

const initMapDispatchToProps = dispatch => ({

});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(AuthUser)