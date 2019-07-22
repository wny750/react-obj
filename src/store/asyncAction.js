import axios from "axios";

export const asyncAction =({
    url,params={},method="get",receipt=false,typeName,data={}
})=>(dispatch,getState)=>(
    axios({
        params,method,data,url
    }).then(
        res=>{
            dispatch({type:typeName,payload:res.data});
            if(receipt) return res.data
        }
    )
)
// function fn(){
//     function fn(){

//     }
// }
// ()=>()=>{}