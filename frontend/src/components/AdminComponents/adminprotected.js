import React from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
export default function AProtected(props){
     let Cmp=props.Cmp
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("admintoken"))
        {
        navigate("/err")
       }},[]) 
    return(
        <>
       <Cmp/>
        </>
    )
}
