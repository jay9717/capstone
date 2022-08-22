import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Update=()=>{
    const [quantity,setquantity]=useState("")
    const {id}=useParams()
    
    function update(e){console.log(e.currentTarget.id)
        axios.put(`http://localhost:3002/admin/updateproduct/${e.currentTarget.id}`,{Quantity:quantity
     }).then((res)=>console.log(res))}

     function handlechange(e){
       console.log(e.target.value)
     }
    return(
        <>
        newquantity:<input type='text' onChange={(e)=>{handlechange(e)}}/>
        <button id={id} onClick={update}>update</button>
        </>
    )
}
export default Update