import images from "../imagestyle";
import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sofa=()=>{
    const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
   
    const logout=()=>{
     localStorage.removeItem("usertoken")
        navigate("/")
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

    const [image,setimage]=useState([])
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

       useEffect(()=>{
        axios.get("http://localhost:3002/admin/home").then((res)=>{setimage(res.data.data.products)
       
      })
       },[])
    return(
        <>
       <div id="align">
           <span id="p">Welcome to HomeShop</span>
            <input type="search" placeholder="search"  onChange={(e)=>{search(e)}}/>&nbsp;
            <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
             <button className='btn btn-primary'onClick={logout} id="button">Logout</button>&nbsp;
             
           </div>


        {image.length>0?image.map((item)=>(
            <>
           { item.Category==='sofa'?<div className="container" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green",width:320}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>Rs.{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>:<></>
           }
            </>)):<></>
           }
        
       
       {/*<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
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
        */}
   
        </>
    )
}
const Decor=()=>{ const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
   
    const logout=()=>{
     navigate("/")
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

    const [image,setimage]=useState([])
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

       useEffect(()=>{
        axios.get("http://localhost:3002/admin/home").then((res)=>{setimage(res.data.data.products)
       
      })
       },[])

    return(
        <> <div id="align">
        <span id="p">Welcome to HomeShop</span>
         <input type="search" placeholder="search"  onChange={(e)=>{search(e)}}/>&nbsp;
         <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
          <button className='btn btn-primary'onClick={logout} id="button">Logout</button>&nbsp;
          
        </div>


{image.length>0?image.map((item)=>(
            <>
           { item.Category==='decor'?<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green",width:320}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>:<></>
           }
            </>)):<></>
           }

       {/* <img src={images.d1} className="Responsive image" style={{width:420}}/> &nbsp;
        <img src={images.d2} className="Responsive image" style={{width:420}}/>&nbsp;
    <img src={images.d3} className="Responsive image" style={{width:420}}/>&nbsp;*/}
        </>
    )
}

const Recliners=()=>{ const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
   
    const logout=()=>{
     navigate("/")
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

    const [image,setimage]=useState([])
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

       useEffect(()=>{
        axios.get("http://localhost:3002/admin/home").then((res)=>{setimage(res.data.data.products)
       
      })
       },[])

    return(
        <> <div id="align">
        <span id="p">Welcome to HomeShop</span>
         <input type="search" placeholder="search"  onChange={(e)=>{search(e)}}/>&nbsp;
         <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
          <button className='btn btn-primary'onClick={logout} id="button">Logout</button>&nbsp;
          
        </div>
{image.length>0?image.map((item)=>(
            <>
           { item.Category==='recliners'?<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green",width:320}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>:<></>
           }
            </>)):<></>
           }

       {/*} <img src={images.r1} className="Responsive image" style={{width:420}}/> &nbsp;
        <img src={images.r2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.r3} className="Responsive image" style={{width:420}}/>&nbsp;
    <img src={images.r4} className="Responsive image" style={{width:420}}/>&nbsp;*/}
        </>
    )
}

const Wallacent=()=>{ const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
   
    const logout=()=>{
     navigate("/")
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

    const [image,setimage]=useState([])
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

       useEffect(()=>{
        axios.get("http://localhost:3002/admin/home").then((res)=>{setimage(res.data.data.products)
       
      })
       },[])
    return(
        <> <div id="align">
        <span id="p">Welcome to HomeShop</span>
         <input type="search" placeholder="search"  onChange={(e)=>{search(e)}}/>&nbsp;
         <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
          <button className='btn btn-primary'onClick={logout} id="button">Logout</button>&nbsp;
          
        </div>
{image.length>0?image.map((item)=>(
            <>
           { item.Category==='wallacent'?<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green",width:320}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>:<></>
           }
            </>)):<></>
           }

        {/*<img src={images.w1} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w3} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w4} className="Responsive image" style={{width:420}}/>&nbsp;
    <img src={images.w5} className="Responsive image" style={{width:420}}/>&nbsp;*/}
        </>
    )
}

/////

const Lightening=()=>{ const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
   
    const logout=()=>{
     navigate("/")
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

    const [image,setimage]=useState([])
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

       useEffect(()=>{
        axios.get("http://localhost:3002/admin/home").then((res)=>{setimage(res.data.data.products)
       
      })
       },[])

    return(
        <> <div id="align">
        <span id="p">Welcome to HomeShop</span>
         <input type="search" placeholder="search"  onChange={(e)=>{search(e)}}/>&nbsp;
         <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
          <button className='btn btn-primary'onClick={logout} id="button">Logout</button>&nbsp;
          
        </div>
{image.length>0?image.map((item)=>(
            <>
           { item.Category==='lightening'?<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>:<></>
           }
            </>)):<></>
           }

       {/*} <img src={images.r1} className="Responsive image" style={{width:420}}/> &nbsp;
        <img src={images.r2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.r3} className="Responsive image" style={{width:420}}/>&nbsp;
    <img src={images.r4} className="Responsive image" style={{width:420}}/>&nbsp;*/}
        </>
    )
}

const Carpets=()=>{ const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
   
    const logout=()=>{
     navigate("/")
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

    const [image,setimage]=useState([])
    function AddToCart(e){
        console.log(e.currentTarget.id)
       axios.post(`http://localhost:3002/postcart/${e.currentTarget.id}`).then((res)=>console.log(res))
       }
       function addtowishlist(e){
        const itemid=e.currentTarget.id
        axios.post(`http://localhost:3002/postwishlist/${itemid}`).then((res)=>console.log(res))
       }

       useEffect(()=>{
        axios.get("http://localhost:3002/admin/home").then((res)=>{setimage(res.data.data.products)
       
      })
       },[])
    return(
        <> <div id="align">
        <span id="p">Welcome to HomeShop</span>
         <input type="search" placeholder="search" onChange={(e)=>{search(e)}}/>&nbsp;
         <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
          <button className='btn btn-primary'onClick={logout} id="button">Logout</button>&nbsp;
          
        </div>
{image.length>0?image.map((item)=>(
            <>
           { item.Category==='carptes'?<div className="conatiner p-1 px-3" style={{borderWidth:1,borderStyle:'solid',display:"inline-block",backgroundColor:"green"}}>
           <div className="row gx-1">
            <div className="p-0" style={{color:"blue"}}><img src={require("../../image/"+item.Image)} className="Responsive image" style={{width:300}}/> 
            </div><i>{item.ProductName}</i><i>{item.Cost}</i>
            </div>
            <button className="btn btn-primary" id={item._id} onClick={AddToCart} >AddToCart</button>&nbsp;<button className="btn btn-primary" id={item._id} onClick={addtowishlist} >AddToWishlist</button>
            </div>:<></>
           }
            </>)):<></>
           }

        {/*<img src={images.w1} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w2} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w3} className="Responsive image" style={{width:420}}/>&nbsp;
        <img src={images.w4} className="Responsive image" style={{width:420}}/>&nbsp;
    <img src={images.w5} className="Responsive image" style={{width:420}}/>&nbsp;*/}
        </>
    )
}
export {Sofa,Decor,Recliners,Wallacent,Lightening,Carpets}