const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())
const cors=require("cors")
app.use(cors())
const upload=require("express-fileupload")
app.use(upload())
const userrouter=require("./routes/userroutes")
const adminrouter=require("./routes/adminroute")
const bulkmodel=require("./Model/buldupload")
const csvtojson=require("csvtojson")

app.post("/upload",async (req,res)=>{
    console.log(req.files.uploadFiles.name)
    const filepath=("E:/wipro/finalcapstone/frontend/src/"+req.files.uploadFiles.name)
    csvtojson()
.fromFile(filepath)
.then((json)=>{console.log(json)
   bulkmodel.insertMany(json).then(function (){
        console.log("data inserted")
        res.json({success:"sucess"});
    }).catch(function (err){
        console.log(err)
    })
}) 
})






app.use("/",userrouter)       
app.use("/admin",adminrouter) 

let App=app.listen(3002,()=>{console.log(`server started at port ${App.address().port}`)})