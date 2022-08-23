import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Category from "../category"
import image from "../../images/heroImg.jpg"
import Adminnav from "./adminnavbar"


const UserProduct=()=>{
    const [user,setuser]=useState([])
    const [product,setproduct]=useState([])
  
    function updateproduct(e){
      console.log(e.currentTarget.id)
     const itemid=e.currentTarget.id
     axios.put(`http://localhost:3002/admin/updateproduct/${itemid}`,{
        Quantity:50
     }).then((res)=>console.log(res))
    
    }
    
    
    const deleteproduct=(e)=>{
     axios.delete(`http://localhost:3002/admin/deleteproduct/${e.currentTarget.id}`).then((res)=>console.log(res))
    }
    const deleteuser=(e)=>{
        const userid=e.currentTarget.id
        axios.delete(`http://localhost:3002/admin/deleteuser/${userid}`).then((res)=>console.log(res))
    }
    function updateuser(e){
    
        axios.put(`http://localhost:3002/admin/updatepuser/${e.currentTarget.id}`,{
            
        }).then((res)=>console.log(res))
       }
    const navigate=useNavigate()
   useEffect(()=>{
    axios.get("http://localhost:3002/admin/home").then((res)=>{    
setuser(res.data.data.user)
setproduct(res.data.data.products)
})
   },[])
   
   
    return(
        <>  <Adminnav/>
           <Category/>
          
            
           
           {user.length>0?<h1>All users</h1>:<></>}
           {user.length>0? user.map((item)=>(
           <>
        <div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block"}}>
       <div className="row gx-1">
       <div className="col">
        <div className="p-0" style={{color:"blue"}}>username:{item.username}<div>gender:{item.gender}</div>
        <div>phoneno:{item.phoneno}</div>
        </div>
        </div>
        </div>
        <button className="btn btn-primary" id={item._id} onClick={deleteuser}>delete</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={updateuser}>update</button>
        </div>&nbsp;
        </>)):<></>}
            
            
            {product.length>0?<h1>All Products</h1>:<></>}
            <div id="update" style={{display:"inline-block"}}></div><div id="button"></div>
     {product.length>0? product.map((item)=>(
           <>
        <div className="conatiner p-1 px-4" style={{borderWidth:1,borderStyle:'solid',display:"inline-block"}}>
       <div className="row gx-1">
       <div className="col" ><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:100}}/> 
        <div className="p-0" style={{color:"blue"}}>name:{item.ProductName}<div>price:{item.Cost}</div>
        <div>quantity:{item.Quantity}</div><div>company:{item.ProductCompany}</div>
        <button id={item._id} onClick={deleteproduct} className="btn btn-primary" >delete</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={updateproduct}>update</button>
        </div>
        </div>
        </div></div>&nbsp;
        </>)):<></>}
        </>
    )
}
export default UserProduct
