const usermodel=require("../Model/usermodel")
const {productmodel}=require("../Model/productmodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const privatekey="jsoncapstoneprojectprivatekey"
const usercontroller={}

//controller for login user
usercontroller.login=async(req,res)=>{
    const body=req.body
    
    try
    {
        const userdtl=await usermodel.findOne({username:body.username})
        if(userdtl){const gethashedpassword=userdtl.password
            const result=await bcrypt.compare(body.password,userdtl.password)
            if(result)
            {
                const user=await usermodel.findOne({password:gethashedpassword},{password:0,__v:0,admin:0})
                const admin=userdtl.admin
                if(!admin)
                {const gentoken=jwt.sign({password:gethashedpassword},privatekey)
                    res.send(
                        {
                            message:"login success",
                            data:user,
                            status:true,
                            token:gentoken
                        }
                        )
                    }
                    else
                    {
                        res.send(
                            {
                                message:"please check you username and password",
                                status:false
                            }
                            )
                    }
                }
                else
                {
                    res.send(
                        {
                            message:"please check you username and password",
                            status:false
                        }
                        )
                    }
                }
                else
                {
                    res.send(
                        {
                            message:"please check you username and password",
                            status:false
                        }
                        )
                    }
                }
                catch(err)
                {
                    res.send(err)
                }
            
            
            }
//controller for logout user
usercontroller.logout=(req,res)=>{
    res.send("logout successfully")
}

//controller for registering user
usercontroller.register=async(req,res)=>{
        const body=req.body
        const hashedpassword=await bcrypt.hash(body.password,4)
        try{
         const data=await usermodel.create({
         username:body.username,
         password:hashedpassword,
         gender:body.gender,
         phoneno:body.phoneno,
         admin:false
        })
       
        if(data){ 
            
        res.send({
        message:"user registered successfully",
        status:true
    })}
    else
    res.send("not registerd yet")}
        catch(err){res.send(err)}
        }

 // controller for adding product to cart section       
usercontroller.read=async(req,res)=>{
            const productid=req.params.id
            try{
            const adcart=await productmodel.findOneAndUpdate({id:productid},{addToCart:true})
            if(adcart){
            res.send({message:"added to cart section",status:true})
           }
           else
           res.send({message:"product not added",status:false})
         }
            catch(err){console.log(err)}
         
         }
 
//controller for getting products added to cart section         
usercontroller.getreadbook=async(req,res)=>{
            try{
                const addedcart=await productmodel.find({addToCart:true},{addToCart:0,WishList:0})
                if(addedcart.length>0){
                    res.send({
                        message:addedcart,
                        status:true
                    })
                }
                else
                res.send("no product in this section")
            
            }
            catch(err){
                res.send(err)
            }
         }


//controller for adding products to wishlist section         
usercontroller.like=async(req,res)=>{
            const productid=req.params.id
            try{
           const addwishlist=await productmodel.findOneAndUpdate({id:productid},{WishList:true})
           if(addwishlist){
             res.send({message:"added to wishlist section",status:true})
           }
           else
           res.send({message:"product not added",status:false})
         }
            catch(err){console.log(err)}
        
         
         }

 // controller for getting products added to wihslist section        
usercontroller.getlikebook=async(req,res)=>{
            try{
                const getwishlist=await productmodel.find({WishList:true},{addToCart:0,WishList:0})
                if(getwishlist.length>0){
                    res.send({
                        message:getwishlist,
                        status:true
                    })
                }
                else
                res.send("no bookes in like section")
            
            }
            catch(err){
                res.send(err)
            }
         }
module.exports=usercontroller