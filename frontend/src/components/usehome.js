import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const UserHome=()=>{
    const [s,sets]=useState(false)
    const [w,setw]=useState(false)
    const [r,setr]=useState(false)
    const [d,setd]=useState(false)
    const navigate=useNavigate()
    const register=()=>{
     navigate("/signup")
    }
    const login=()=>{
     navigate("/signin")
    }
    const userlogin=()=>{
     navigate("/adminsignin")
    }
    const userregister=()=>{
     navigate("/adminsignup")
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
    return(
        <>  
           <div id="align">
           <span id="p">Welcome to HomeShop</span>
            <input type="search" onChange={(e)=>{search(e)}}/>&nbsp;
            <button onClick={Search} className='btn' style={{color:"white"}}>search</button> &nbsp;
           <button onClick={register} className='btn btn-primary'>Register</button> &nbsp;
             <button className='btn btn-primary'onClick={login} id="button">Login</button>&nbsp;
             <button onClick={userregister} className='btn btn-primary' id="center"> admin Register</button>&nbsp;
             <button onClick={userlogin} className='btn btn-primary'>admin Login</button>
           </div>
         
           
          
          
        </>
    )
}
export default UserHome
