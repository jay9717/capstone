const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/CAPSTONE_PROJECT").then(()=>console.log("connnected"))
const schema=mongoose.Schema
const productSchema=new schema({
    ProductName:String,
    ProductCompany:String,
    Quantity:Number,
    Cost:Number,
    Category:String,
    Image:String,
    addToCart:{type:Boolean,
        default:false
    },
    WishList:{type:Boolean,
        default:false
    }
})
const productmodel=mongoose.model("prductmodel",productSchema)
module.exports={productmodel}

