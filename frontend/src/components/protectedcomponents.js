import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
export default function Protected(props){
     let Cmp=props.Cmp
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("usertoken"))
        {
        navigate("/err")
       }},[]) 
    return(
        <>
       <Cmp/>
        </>
    )
}
