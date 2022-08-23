const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const controller=require("../../../Controllers/couponcontroller")
server.post("/create",controller.create)
module.exports=server   