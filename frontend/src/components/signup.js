import React,{useState}from "react"
import"./styles/react.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Category from "./category"
import axios from "axios"
export default function Signup() {
    const[username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [gender,setgender]=useState("")
    const[phone,setphone]=useState("")
    function handlechange(e){
        if(e.target.name==="username")
        setusername(e.target.value)
        if(e.target.name==="password")
        setpassword(e.target.value)
        if(e.target.name==="gender")
        setgender(e.target.value)
        if(e.target.name==="phone")
        setphone(e.target.value)
    }

    function submit(e){
        e.preventDefault()
        axios.post("http://localhost:3009/register",{
            username:username,
            password:password,
            gender:gender,
            phoneno:phone
        }).then((res)=>{console.log(res)
          document.getElementById("msg").innerHTML="registered successfully please login"
          setTimeout(()=>document.getElementById("msg").innerHTML="",3000)
        })
    }

  return (<><Category/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Username</label>
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
          <div className="form-group mt-3">
            <label>Phone no:</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter phone no"
              name="phone"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Gender</label>
            <input
              type="textr"
              className="form-control mt-1"
              placeholder="Enter gender"
              name="gender"
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
    <p id="msg"></p>
    </>
  )
}