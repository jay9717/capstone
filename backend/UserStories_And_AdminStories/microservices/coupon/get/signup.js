const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const usercontroller=require("../../../Controllers/couponcontroller")
server.post("/get",usercontroller.find)
module.exports=server 