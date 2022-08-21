import React  from "react";
import {Link,NavLink,Navigate, useNavigate} from 'react-router-dom'
import"../styles/react.css"
import FormData from 'formdata'
const Adminnav=()=>{
    const navigate=useNavigate()
    const createuser=()=>{
        navigate("/signin")
    }
    const createproduct=()=>{navigate("/admincreateproduct")}
    const logout=()=>{navigate("/")}
    const adminHome=()=>{navigate("/")}
    const register=()=>{navigate("/adminsignup")}
    return(
        <>        
       <div className="conatiner p-1 bg-danger px-4" >
       <div className="row gx-1">
       <div className="col" >
        <div className="p-3"></div></div>

        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onClick={createuser}>createuser</button></div>
        </div>
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onClick={createproduct}>createproduct</button></div>
        </div>
        <div className="col" >
        <div className="p-3"> <button className="btn btn-primary" onclick={adminHome}>Home</button></div>
        </div><div className="col" >
        <div className="p-3 "><button className="btn btn-primary" onClick={register}>register</button></div>
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