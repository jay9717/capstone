import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserHome from "./usehome"
import Category from "./category"
import axios from "axios"
const Cart=()=>{
    const [product,setproduct]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3002/getcart").then((res)=>setproduct(res.data.message))
    },[])
    return(
        <>  
           
            
           {product.length>0?product.map((item)=>(<>
            <div className="p-0" style={{display:"inline-block"}}><img src={require("../image/"+item.Image)} className="Responsive image" style={{width:100}}/>
           &nbsp; <div className="row gx-1" style={{display:"inline-block"}}>
                {item.ProductName}<br/>{item.Cost}</div>
            &nbsp;
           <br/><input type="Number" placeholder="qty:1" style={{width:100}}/></div>&nbsp;
            
            </>
            ))
            :<h2>no product</h2>
           }
          
        </>
    )
}
const Wishlist=()=>{
    const [product,setproduct]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3002/getwishlist").then((res)=>setproduct(res.data.message))
    },[])
    return(
        <>  
           
            
           {product.length>0?product.map((item)=>(<>
            <div className="p-0" style={{display:"inline-block"}}><img src={require("../image/"+item.Image)} className="Responsive image" style={{width:100}}/>
           &nbsp; <div className="row gx-1" style={{display:"inline-block"}}>
                {item.ProductName}<br/>{item.Cost}</div>
            &nbsp;
           <br/><input type="Number" placeholder="qty:1" style={{width:100}}/></div>&nbsp;
            
            </>
            ))
            :<h2>no product</h2>
           }
          
        </>
    )
}
export {Cart,Wishlist}
