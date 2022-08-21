import React, { useState } from "react"
import {Link,Routes,Route,BrowserRouter, Navigate} from 'react-router-dom'
import AdminHome from "./AdminComponents/adminhome"
import AdminSignin from "./AdminComponents/adminsignin"
import AdminSignup from "./AdminComponents/adminsignup"
import AdminCreateProduct from "./AdminComponents/createproduct"
import UserProduct from "./AdminComponents/userproduct"
import Home from "./home"
import {Sofa,Decor,Recliners,Wallacent} from "./imagecomponent/sofa"
import Signin from "./signin"
import Signup from "./signup"

const Router=()=>{
    return(<>
     
        <BrowserRouter> 
         <Routes>
         <Route path="/sofa" element={<Sofa/>}></Route>
         <Route path="/wallaccent" element={<Wallacent/>}></Route>
         <Route path="/recliners" element={<Recliners/>}></Route>
         <Route path="/decor" element={<Decor/>}></Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/signin" element={<Signin/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/adminsignin" element={<AdminSignin/>}></Route>
         <Route path="/adminsignup" element={<AdminSignup/>}></Route>
         <Route path="/adminhome" element={<AdminHome/>}></Route>
         <Route path="/userproduct" element={<UserProduct/>}></Route>
         <Route path="/admincreateproduct" element={<AdminCreateProduct/>}></Route>
         </Routes>
         </BrowserRouter>
         
        
        </>
    )
}
export default Router