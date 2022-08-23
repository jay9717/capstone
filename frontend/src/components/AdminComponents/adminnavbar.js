import React  from "react";
import {Link,NavLink,Navigate, useNavigate} from 'react-router-dom'
import"../styles/react.css"
import FormData from 'form-data'

const Adminnav=()=>{

    function createcoupon(){
        navigate("/coupon")
    }

    const navigate=useNavigate()
    const createuser=()=>{
        navigate("/signup")
    }
    const userproduct=()=>{
        navigate("/userproduct")
    }
    const createproduct=()=>{navigate("/admincreateproduct")}
    const logout=()=>{
        localStorage.removeItem("admintoken")
        navigate("/")}
    const adminHome=()=>{navigate("/")}
   
    const upload=(e)=>{
       navigate("/upload")
    
   }
    return(
        <>        
       <div className="conatiner p-1 bg-danger px-4" >
       <div className="row gx-1">
       
         
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" style={{width:150}}onClick={upload}>bulk upload</button></div>
        </div>

        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" style={{width:150}}onClick={createcoupon}>create coupon</button></div>
        </div>
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onClick={userproduct}>user/products</button></div>
        </div>
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onClick={createuser}>createuser</button></div>
        </div>
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onClick={createproduct}>createproduct</button></div>
        </div>
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onClick={adminHome}>Home</button></div>
        </div>
        <div className="col" >
        <div className="p-3 "><button className="btn btn-primary" onClick={logout}>Logout</button></div>
        </div>
        </div>
        </div>
        
        </>
    )
}
export default Adminnav