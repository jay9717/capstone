import images from "../imagestyle";
import React from "react";
import axios from "axios";
const Sofa=()=>{

    function AddToCart(e){
        const itemid=e.currentTarget.id
        axios.put(`http://localhost:3002/postcart/${itemid}`).then((res)=>console.log(res))
       }

    return(
        <>
        <div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
       <div className="row gx-1">
        <div className="p-0" style={{color:"blue"}}><img src={images.s1} className="Responsive image" style={{width:300}}/> 
        </div>
        </div><br/><br/>
        <button className="btn btn-primary" onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" >AddToWishlist</button>
        </div>
       
       <div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
       <div className="row gx-1">
        <div className="p-0" style={{color:"blue"}}><img src={images.s2} className="Responsive image" style={{width:300}}/>
        </div>
        </div><br/><br/>
        <button className="btn btn-primary" >AddToCart</button>&nbsp;<button className="btn btn-primary" >AddToWishlist</button>
        </div>

<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
<div className="row gx-1">
 <div className="p-0" style={{color:"blue"}}> <img src={images.s3} className="Responsive image" style={{width:300}}/>
 </div>
 </div><br/><br/>
 <button className="btn btn-primary" >AddToCart</button>&nbsp;<button className="btn btn-primary" >AddToWishlist</button>
 </div>
 
 <div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
 <div className="row gx-1">
  <div className="p-0" style={{color:"blue"}}> <img src={images.s4} className="Responsive image" style={{width:300}}/>
  </div>
  </div><br/><br/>
  <button className="btn btn-primary" >AddToCart</button>&nbsp;<button className="btn btn-primary" >AddToWishlist</button>
  </div>

  <div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
  <div className="row gx-1">
   <div className="p-0" style={{color:"blue"}}> <img src={images.s5} className="Responsive image" style={{width:300}}/>
   </div>
   </div><br/><br/>
   <button className="btn btn-primary" >AddToCart</button>&nbsp;<button className="btn btn-primary" >AddToWishlist</button>
   </div>

   
        </>
    )
}
const Decor=()=>{
    return(
        <>
        <img src={images.d1} className="Responsive image" style={{width:420}}/> &nbsp;
        <img src={images.d2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.d3} className="Responsive image" style={{width:420}}/>&nbsp;
        </>
    )
}

const Recliners=()=>{
    return(
        <>
        <img src={images.r1} className="Responsive image" style={{width:420}}/> &nbsp;
        <img src={images.r2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.r3} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.r4} className="Responsive image" style={{width:420}}/>&nbsp;
        </>
    )
}

const Wallacent=()=>{
    return(
        <>
        <img src={images.w1} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w3} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w4} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w5} className="Responsive image" style={{width:420}}/>&nbsp;
        </>
    )
}
export {Sofa,Decor,Recliners,Wallacent}