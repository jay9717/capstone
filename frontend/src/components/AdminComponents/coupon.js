import React,{useState}from "react"
import"../styles/react.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Category from "../category"
import axios from "axios"
import Adminnav from "./adminnavbar"
export default function Coupon() {
    const[code,setcode]=useState("")
    const [value,setvalue]=useState("")
    function handlechange(e){
        if(e.target.name==="code")
        setcode(e.target.value)
        if(e.target.name==="value")
        setvalue(e.target.value)
       
    }

    function submit(e){
        e.preventDefault()
        axios.post("http://localhost:3002/admin/createcoupon",{
            code:code,
            value:value
            
        }).then((res)=>console.log(res))
        document.getElementById("msg").innerHTML="coupon created"
        setTimeout(()=>document.getElementById("msg").innerHTML="",3000)
    }

  return (<>
  <Adminnav/>
  <Category/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Coupon Creation</h3>
          <div className="form-group mt-3">
            <label>Coupon Code</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter coupon code"
              name="code"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Coupon Value</label>
            <input
              type="Number"
              className="form-control mt-1"
              placeholder="Enter coupon value"
              name="value"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
         
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
          <h5 id="msg"></h5>
        </div>
      </form>
    </div>
    
    </>
  )
}