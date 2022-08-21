import React from "react";
import {Link,NavLink,Navigate} from 'react-router-dom'
import"./styles/react.css"
const Category=()=>{
    return(
        <>
        
            
        
       <div className="conatiner p-1 bg-info px-4" >
       <div className="row gx-1">
       <div className="col" >
        <div className="p-3"></div></div>

        <div className="col" >
        <div className="p-3"> <Link to={"/sofa"} style={{textDecoration:'none',color:'white',fontSize:20}}>Sofa </Link></div>
        </div>
        <div className="col" >
        <div className="p-3"> <Link to={"/recliners"} style={{textDecoration:'none',color:'white',fontSize:20}}>Recliners </Link></div>
        </div><div className="col" >
        <div className="p-3 "> <Link to={"/wallaccent"} style={{textDecoration:'none',color:'white',fontSize:20}}>Wall accents</Link></div>
        </div><div className="col" >
        <div className="p-3 "> <Link to={"/decor"} style={{textDecoration:'none',color:'white',fontSize:20}}>Decor</Link></div>
        </div><div className="col" >
        <div className="p-3 "> <Link to={"/"} style={{textDecoration:'none',color:'white',fontSize:20}}>Lighting </Link></div>
        </div><div className="col" >
        <div className="p-3 "> <Link to={"/"} style={{textDecoration:'none',color:'white',fontSize:20}}>Carpets</Link></div>
        </div>
        </div>
        </div>
        
        </>
    )
}
export default Category