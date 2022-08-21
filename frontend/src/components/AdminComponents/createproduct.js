import React, { useState } from "react"
import"../styles/react.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Category from "../category"
import axios from "axios"


export default  function AdminCreateProduct() {
    const[pname,setpname]=useState("")
    const [pcompany,setpcompany]=useState("")
    const [quantity,setquantity]=useState("")
    const [cost,setcost]=useState("")
    function handlechange(e){
        if(e.target.name==="productname")
        setpname(e.target.value)
        if(e.target.name==="company")
        setpcompany(e.target.value)
        if(e.target.name==="quantity")
        setquantity(e.target.value)
        if(e.target.name==="cost")
        setcost(e.target.value)
    }
    function submit(e){ e.preventDefault()
      axios.post("http://localhost:3002/admin/createproduct",{
         ProductName:pname

        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
  return (<>
  <Category/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">ProductCreation</h3>
          <div className="form-group mt-3">
            <label>ProductName</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter name"
              name="productname"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>ProductCompany</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter company name"
              name="company"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Cost</label>
            <input
              type="Number"
              className="form-control mt-1"
              placeholder="Enter cost"
              name="cost"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Quantity</label>
            <input
              type="Number"
              className="form-control mt-1"
              placeholder="Enter quantity"
              name="quantity"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}