const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())
const cors=require("cors")
app.use(cors())

const userrouter=require("./routes/userroutes")
const adminrouter=require("./routes/adminroute")

app.use("/",userrouter)       
app.use("/admin",adminrouter) 

let App=app.listen(3002,()=>{console.log(`server started at port ${App.address().port}`)})