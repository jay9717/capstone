const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const controller=require("../../../Controllers/admincontroller")
server.post("/register",controller.register)
module.exports=server 