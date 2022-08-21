const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/CAPSTONE_PROJECT")
const schema=mongoose.Schema
const couponSchema=new schema({
    code: {
        type: String,
        required:true,
        unique: true
    },
    eligibility: {
        type: String,
        default:"all" 
    },
    value: {
        type: Number,
        required:true
    },
    expiryDate: {
        type: Date,
        default: Date.now()+86400
    }
})
const couponmodel=mongoose.model("couponmodel",couponSchema)
module.exports={couponmodel}