import React, { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import UserHome from "./usehome"
import Category from "./category"
import axios from "axios"
const Cart=()=>{
    const [product,setproduct]=useState([])
    const [ccode,setccode]=useState("")
    const [coupon,setcoupon]=useState(false)
    const [gcoupon,setgcoupon]=useState([])
    let value,codevalue
    let pc=0;
    useEffect(()=>{
        axios.get("http://localhost:3002/getcart").then((res)=>
        {
if(res.data!=="no product in this section")
{setproduct(res.data.message)
    
    
   }
}
)
axios.get("http://localhost:3002/admin/getcoupons").then((res)=>{setgcoupon(res.data)})
},[])
gcoupon.map((item)=>(
    <>
    {item.eligibility===localStorage.getItem("coupon")?<>
    {document.getElementById("msg").innerHTML=`congratulation! you are eligible for discount coupon
    use following code:
    ${item.code}`} {value=item.value} {codevalue=item.code}</>
    :<></>}
    </>
))
for(var i=0;i<product.length;i++)
    pc+=product[i].Cost
    const navigate=useNavigate()
function order(){
    navigate("/order")
}

function code(e){
    setccode(e.target.value)
}
function dvalue(e){e.preventDefault()
   if(ccode===codevalue)
    {setcoupon(true)
        document.getElementById("s").innerHTML="successfully applied"
        setTimeout(()=>document.getElementById("s").innerHTML="",1000)
    }
    else
    {document.getElementById("err").innerHTML="coupon is invalid"
setTimeout(()=>document.getElementById("err").innerHTML="",2000)
}
   
}

    return(
        <>  <h3 id="msg" style={{color:'green',textAlign:"center"}}></h3><br/>
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
            
            <br/><br/>
            <form><input type="text"  placeholder="entercoupon" onChange={(e)=>{code(e)}} required />
            <input type="submit" onClick={dvalue} value="done"/>
            <h4 id="s" style={{color:'green'}}></h4>
            </form><br/>
            {!coupon?<><b>Total Cost:<span style={{color:'blue'}}>{pc}</span></b></>:<>
            <><strike><b>Total Cost:<span style={{color:'blue'}}>{pc}</span></b></strike><br/>
            <b>Discounted Cost:<span style={{color:'blue'}}>{pc-value}</span></b></>
            </>}
            
          <h4 id="err" style={{color:'red'}}></h4>

          <button class="btn btn-success" onClick={order}>Place Order</button>
          
        </>
    )
}
const Wishlist=()=>{
    const [product,setproduct]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3002/getwishlist").then((res)=>{
        if(res.data!=="no product in this section")
        setproduct(res.data.message)})
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
