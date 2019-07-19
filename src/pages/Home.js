import React from 'react';
// import ReactDom from 'react-dom';
import Swipe from "../layouts/Swipe"
import List1 from"../layouts/List1"
import Products from"../layouts/Products"

class Home extends React.Component{
    render(){
        return (
            <div>
                    <Swipe />
                    <List1 />
                    <Products />
            </div>
        )
    }
}

export default Home