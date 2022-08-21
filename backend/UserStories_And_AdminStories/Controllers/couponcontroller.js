const {couponmodel}=require("../Model/couponmodel")
const { findOneAndDelete } = require("../Model/usermodel")
const couponcontroller={}
// coupon creation
couponcontroller.create=async(req,res)=>{
    const body=req.body
    try{
    const createcoupon =await couponmodel.create({
       code:body.code,
       eligibility:body.eligibility,
       value:body.value,
       expiryDate:body.expiryDate
    })
    console.log(createcoupon) 
    if(createcoupon){
        res.send({
            status:true,
            message:"coupon created successfully"
        })
    }
    else
    res.send({
        status:false,
        message:"coupon not created"
    })  
    }
    catch(err){res.send(err)}
}

// coupon find
couponcontroller.find=async(req,res)=>{
    try{
        const coupons=await couponmodel.find()
        if(coupons)
        res.send(coupons)
    }
    catch(err){res.send(err)}
}
//coupon delete
couponcontroller.delete=async(req,res)=>{
    const code=req.params.code
    try{
        const deleted=await findOneAndDelete({code:code})
        if(deleted)
        res.send("coupon deleted successfully")
    }
    catch(err){
        res.send(err)
    }
}
module.exports=couponcontroller