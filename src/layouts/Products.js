import React,{Component} from 'react';
// import ReactDom from 'react-dom'
import "../assets/css1/commonList.css"
// import axios from "../utils/axios"


class Products extends Component{
	state={
		list:[]
	}
	componentDidMount(){
		axios({
			url:"/mock/product",
			params:{_limit:20}
		}).then(res=>{
			this.setState({list:res.data.page_data})
			// console.log(this.state.list)
		})
	}
	
    render(){
        return (
            <div className="commonList">
                <div className="con">
                    <div id="commonLists" className="list">
						<ul>
							{this.state.list.map((val,index)=>
										(<li key={index} className={val.id % 2 ? "no_mr":""} >
											<img src={val.img} />
											<div className="right">
												<h1>{val.title}</h1>
												<div className="content">
													<p className="color">{val.pri}元/斤</p>
													<i className="iconfont icon-htmal5icon29"></i>
												</div>
											</div>
										</li>))
										
							}
            			</ul>
        			</div>
                </div>
            </div>
        )
    }
}

export default Products