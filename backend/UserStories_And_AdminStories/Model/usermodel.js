const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/CAPSTONE_PROJECT")

const schema=mongoose.Schema
const userSchema=new schema({
   
    phoneno:{
        type:Number,
        required:true
    },
    username:
    {
        type:String,
        unique:true,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    gender:
    {
        type:String,
        required:true
    },
    admin:{
        type:Boolean
    }
}
)
const usermodel=mongoose.model("userdetails",userSchema)
module.exports=usermodel