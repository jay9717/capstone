const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const usercontroller=require("../../../Controllers/usercontroller")
server.post("/log",usercontroller.login)
module.exports=server   