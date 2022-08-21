const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const admincontroller=require("../../../Controllers/admincontroller")
server.post("/login",admincontroller.login)
module.exports=server   