const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/CAPSTONE_PROJECT").then(()=>console.log("connnected"))
const schema=mongoose.Schema
const Schema=new schema({
    productname:String,
    company:String,
    quantity:Number,
    cost:Number,
    category:String
})
const bulkmodel=mongoose.model("bulk",Schema)
module.exports=bulkmodel

