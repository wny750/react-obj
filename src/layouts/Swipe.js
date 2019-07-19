import React from "react"
import axios from "../utils/axios";
import ReactSwipe from "react-swipe"
// import {Link} from "react-router-dom"
import "../assets/css1/swiper.css"

class Swipe extends React.Component{
    state={
        list:[
            {
                
            }
        ]
    }
    componentDidMount(){
        axios({
            url:"/mock/banner2",
            params:{_page:1,_limit:4}
        }).then((res)=>{
            
            // console.log(res.data.page_data);
            this.setState({list:res.data.page_data})
            // console.log(this.state.list)
        })
    }
    render(){
        return (
            <>
                <ReactSwipe
                    className="lbt"
                    swipeOptions={{
                    auto: 1000,
                    speed: 500
                    }}

                >
                    {this.state.list.map((val,index)=>{
                        return <img src={val.banner} key={index} />
                    })}
                
                </ReactSwipe>
            </>
        )
    }
}


    export default Swipe