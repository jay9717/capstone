import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Upload=()=>{
    const [file,setfile]=useState(null)
    const handlechange=(e)=>{
        setfile(e.target.files[0])
    }
  
      function upload(e){ e.preventDefault()
        const formdata=new FormData()
        formdata.append("uploadFiles",file)
  
        axios.post("http://localhost:3002/upload",formdata).then((res)=>{
            console.log(res.data.success)
          if(res.data.success==="sucess")
          document.getElementById("msg").innerHTML="inserted successfully"}
           
        ).catch((err)=>console.log(err))
      }
    return(
        <>  <h3 id="msg" style={{color:'green',textAlign:'center'}}></h3>
           <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Bulk Upload</h3>
          <div className="form-group mt-3">
            <label>upload csv files</label>
            <input
              type="file"
              className="form-control mt-1"
              placeholder="insert csv file"
              name="files"
              onChange={(e)=>{handlechange(e)}}
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={upload}>
            upload
            </button>
          </div>
         
        </div>
      </form>
    </div>
          
          
        </>
    )
}
export default Upload
