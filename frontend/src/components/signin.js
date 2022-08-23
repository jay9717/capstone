import React, { useState } from "react"
import"./styles/react.css"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Category from "./category"
import axios from "axios"

export default  function Signin() {
    const[username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
    function handlechange(e){
        if(e.target.name==="username")
        setusername(e.target.value)
        if(e.target.name==="password")
        setpassword(e.target.value)
    }
    function submit(e){
        e.preventDefault()
        axios.post("http://localhost:3009/login",{
            username:username,
            password:password

        }).then((res)=>{if(res.data.message==="login success")
          {localStorage.setItem("usertoken",res.data.token)
          console.log(res.data)
          localStorage.setItem("coupon",res.data.data.username)
       navigate("/afterlogin")}
       else
       document.getElementById("msg").innerHTML=res.data.message
        })
    }
  return (<>
  <Category/><br/>
  <h4 id="msg" style={{color:'red',textAlign:'center'}}></h4>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              name="username"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
    </>
  )
}