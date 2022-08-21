import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserHome from "./usehome"
import Category from "./category"
import image from "../images/heroImg.jpg"
const Home=()=>{
    
    return(
        <>  
           <UserHome/>
            
           <Category/>
           <img src={image} className=" img-fluid" alt="Responsive image"/>
          
          
        </>
    )
}
export default Home
