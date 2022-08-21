const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/CAPSTONE_PROJECT").then(()=>console.log("connnected"))
const schema=mongoose.Schema
const productSchema=new schema({
    ProductName:{type:String},
    ProductCompany:{type:String},
    Quantity:{type:Number},
    Cost:{type:Number},
    addToCart:{type:Boolean,
        default:false
    },
    WishList:{type:Boolean,
        default:false
    }
})
const productmodel=mongoose.model("prductmodel",productSchema)
module.exports={productmodel}

