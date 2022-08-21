const jwt=require("jsonwebtoken")
 function adminauth(req,res,next){
    try{
     const reqtoken=req.headers['authorization']
     const token=reqtoken.replace('Bearer ',"")
     const result=jwt.verify(token,"jsoncapstoneprojectprivatekey")
     req.verification=result
     next()
    }
    catch(err){
        res.send(err)
    }
}

module.exports=adminauth