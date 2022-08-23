import React, { useState } from "react"
import"../styles/react.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Category from "../category"
import axios from "axios"
import FormData from 'form-data'


export default  function AdminCreateProduct() {
    const[pname,setpname]=useState(null)
    const [pcompany,setpcompany]=useState("")
    const [quantity,setquantity]=useState("")
    const [cost,setcost]=useState("")
    const [category,setcategory]=useState("")
    const [file,setfile]=useState(null)
    function handlechange(e){
        if(e.target.name==="pname")
        setpname(e.target.value)
        if(e.target.name==="company")
        setpcompany(e.target.value)
        if(e.target.name==="quantity")
        setquantity(e.target.value)
        if(e.target.name==="cost")
        setcost(e.target.value)
        if(e.target.name==="category")
        setcategory(e.target.value)
    }
    const upload=(e)=>{
      setfile(e.target.files[0])
  }

    function submit(e){ e.preventDefault()
      const formdata=new FormData()
      formdata.append("uploadFiles",file)
      formdata.append("productname",pname)
      formdata.append("productcompany",pcompany)
      formdata.append("cost",cost)
      formdata.append("quantity",quantity)
      formdata.append("category",category)

      axios.post("http://localhost:3002/admin/createproduct",formdata).then((res)=>{
        document.getElementById("msg").innerHTML="product created"
         
      console.log(res)}).catch((err)=>console.log(err))
    }
  return (<>
  <Category/><br/><br/><br/><br/><br/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">ProductCreation</h3>
          <div className="form-group mt-3">
            <label>ProductCategory</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter category"
              name="category"
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
            <label>ProductName</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter product name"
              name="pname"
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
          <div className="form-group mt-3">
            <label>Product Image</label>
            <input
              type="file"
              className="form-control mt-1"
              placeholder="Enter product image"
              onChange={(e)=>{upload(e)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
           <h2 id="msg" style={{color:"green"}}></h2>
        </div>
      </form>
    </div>
    </>
  )
}