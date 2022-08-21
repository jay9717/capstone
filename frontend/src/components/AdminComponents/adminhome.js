import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Category from "../category"
import image from "../../images/heroImg.jpg"
import Adminnav from "./adminnavbar"
const AdminHome=()=>{
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
  const userproduct=()=>{
    navigate("/userproduct")
  }
    return(
        <>  
           <Adminnav/>
           <Category/>
           
           <img src={image} className=" img-fluid" alt="Responsive image"/>
          
          
        </>
    )
}
export default AdminHome
