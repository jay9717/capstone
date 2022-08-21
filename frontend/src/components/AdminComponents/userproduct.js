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
     const itemid=e.currentTarget.id
     axios.put(`http://localhost:3002/admin/updateproduct/${itemid}`).then((res)=>console.log(res))
    }
    const deleteproduct=(e)=>{
     const itemid=e.currentTarget.id
     axios.delete(`http://localhost:3002/admin/deleteproduct/${itemid}`).then((res)=>console.log(res))
    }
    const deleteuser=(e)=>{
        const userid=e.currentTarget.id
        axios.delete(`http://localhost:3002/admin/deleteuser/${userid}`).then((res)=>console.log(res))
    }
    function updateuser(e){
        const itemid=e.currentTarget.id
        axios.put(`http://localhost:3002/admin/updatepuser/${itemid}`).then((res)=>console.log(res))
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
           <br/> 
            
           
           {user.length>0?<h1>All users</h1>:<></>}<br/>
           {user.length>0? user.map((item)=>(
           <>
        <div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block"}}>
       <div className="row gx-1">
       <div className="col">
        <div className="p-0" style={{color:"blue"}}>{item.username}<div>{item.gender}</div>
        <div>{item.phoneno}</div><div>{item.admin}</div>
        </div>
        </div>
        </div>
        <button className="btn btn-primary" id={item._id} onClick={deleteuser}>delete</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={updateuser}>update</button>
        </div>&nbsp;
        </>)):<></>}
            
            
            
            {product.length>0?<h1>All users</h1>:<></>}<br/>
     {product.length>0? product.map((item)=>(
           <>
        <div className="conatiner p-1 px-4" style={{borderWidth:1,borderStyle:'solid',display:"inline-block"}}>
       <div className="row gx-1">
       <div className="col" >
        <div className="p-0" style={{color:"blue"}}>{item.ProductName}<div>{item.Cost}</div>
        <div>{item.Stock}</div><div>{item.CompanyName}</div>
        <button id={item._id} onClick={deleteproduct} className="btn btn-primary" >delete</button>&nbsp;<button className="btn btn-primary" id={item._id}onClick={updateproduct}>update</button>
        </div>
        </div>
        </div></div>&nbsp;
        </>)):<></>}
        </>
    )
}
export default UserProduct
