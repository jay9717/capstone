import React, { useState } from "react"
import {Link,Routes,Route,BrowserRouter, Navigate} from 'react-router-dom'
import AdminHome from "./AdminComponents/adminhome"
import AdminSignin from "./AdminComponents/adminsignin"
import AdminSignup from "./AdminComponents/adminsignup"
import Coupon from "./AdminComponents/coupon"
import AdminCreateProduct from "./AdminComponents/createproduct"
import Update from "./AdminComponents/update"
import UserProduct from "./AdminComponents/userproduct"
import Afterlogin from "./afteruserlogin"
import {Cart, Wishlist } from "./cart"
import Home from "./home"
import Error from "./errorpage"
import {Sofa,Decor,Recliners,Wallacent, Carpets, Lightening} from "./imagecomponent/sofa"
import Signin from "./signin"
import Signup from "./signup"
import Protected from "./protectedcomponents"
import AProtected from "./AdminComponents/adminprotected"
import Upload from "./upload"
import Order from "./order"

const Router=()=>{
    return(<>
     
        <BrowserRouter> 
         <Routes>
         <Route path="/sofa" element={<Sofa/>}></Route>
         <Route path="/wallaccent" element={<Wallacent/>}></Route>
         <Route path="/recliners" element={<Recliners/>}></Route>
         <Route path="/decor" element={<Decor/>}></Route>
         <Route path="/lightening" element={<Lightening/>}></Route>
         <Route path="/carpet" element={<Carpets/>}></Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/signin" element={<Signin/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/adminsignin" element={<AdminSignin/>}></Route>
         <Route path="/adminsignup" element={<AdminSignup/>}></Route>
         <Route path="/adminhome" element={<AdminHome/>}></Route>
         <Route path="/userproduct" element={<AProtected Cmp={UserProduct}/>}></Route>
         <Route path="/afterlogin" element={<Protected Cmp={Afterlogin}/>}></Route>
         <Route path="/usercart" element={<Protected Cmp={Cart}/>}></Route>
         <Route path="/coupon" element={<AProtected Cmp={Coupon}/>}></Route>
         <Route path="/update/:id" element={<Protected Cmp={Update}/>}></Route>
         <Route path="/userwishlist" element={<Protected Cmp={Wishlist}/>}></Route>
         <Route path="/err" element={<Error/>}></Route>
         <Route path="/upload" element={<AProtected Cmp={Upload}/>}></Route>
         <Route path="/order" element={<Order/>}></Route>
         <Route path="/admincreateproduct" element={<AProtected Cmp={AdminCreateProduct}/>}></Route>
         </Routes>
         </BrowserRouter>
         
        
        </>
    )
}
export default Router