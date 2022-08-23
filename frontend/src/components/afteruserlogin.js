import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Category from "./category"
import axios from "axios"
import { Carpets, Decor, Lightening, Recliners, Sofa, Wallacent } from "./imagecomponent/sofa"
const Afterlogin=()=>{
    const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const [product,setproduct]=useState([])
    const navigate=useNavigate()
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

    const logout=()=>{
        localStorage.removeItem("usertoken")
        localStorage.removeItem("coupon")
     navigate("/")
    }
    
    const cart=()=>{
     navigate("/usercart")
   }
   const wishlist=()=>{
    navigate("/userwishlist")
  }
   const search=(e)=>{
    if(e.target.value==='sofa')
   sets(true)
   if(e.target.value==='wall accents')
   setw(true)
   if(e.target.value==='decor')
   setd(true)
   if(e.target.value==='recliners')
   setr(true)
  }
  function Search(){
    if(r)
    navigate("/recliners")
    if(d)
    navigate("/decor")
    if(w)
    navigate("/wallaccent")
    if(s)
    navigate("/sofa")
  }
  useEffect(()=>{
    axios.get("http://localhost:3002/admin/home").then((res)=>{setproduct(res.data.data.products)
   
  })
   },[])
    return(
        <>  
            <div id="align" style={{backgroundColor:"red"}}>
           <span id="p">Welcome to HomeShop</span>
            <input type="search" onChange={(e)=>{search(e)}}/>&nbsp;
            <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
           <button onClick={logout} className='btn btn-success'>Logout</button> &nbsp;
             <button className='btn btn-success'onClick={cart} id="button">Cart</button>&nbsp;
             <button  className='btn btn-success' id="center" onClick={wishlist}> wishlist</button>&nbsp;
             
           </div>
            <Category/>
            <br/>
            
          
           {product.length>0?product.map((item)=>(
            <>
           { <div className="container" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green",width:320}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>Rs.{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>
           }
           &nbsp; </>)):<></>
           }
           
          
          
        </>
    )
}
export default Afterlogin
