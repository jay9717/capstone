const usermodel=require("../Model/usermodel")
const {productmodel}=require("../Model/productmodel.js")
const usercontroller = require("./usercontroller")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const privatekey="jsoncapstoneprojectprivatekey"


const controller={}

//controller for login admin
 controller.login=async(req,res)=>{
    const body=req.body
    try{const userdtl=await usermodel.findOne({username:body.username})
    if(userdtl){const gethashedpassword=userdtl.password
        const result=await bcrypt.compare(body.password,userdtl.password)
        if(result)
        { 
    const user=await usermodel.findOne({password:gethashedpassword},{password:0,__v:0,admin:0})
        if(user)
        {   const admin=userdtl.admin
             if(admin){
              const gentoken=jwt.sign({password:gethashedpassword},privatekey)
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
            }}
       else
       res.send(
        {
            message:"please check you username and password",
            status:false
        }
        )
    }
    else
    res.send(
        {
            message:"please check you username and password",
            status:false
        }
        )
    }
    catch(err)
    {
        res.send(err)
    }
  
 
}

//controller for logout admin
controller.logout=(req,res)=>{
 res.send("logout successfully")
    }

    //controller for register admin
    controller.register=async(req,res)=>{
    const body=req.body
    console.log(body)
    const hashedpassword=await bcrypt.hash(body.password,4)
    try{
     const data=await usermodel.create({
      phoneno:body.phoneno,
      username:body.username,
     password:hashedpassword,
     gender:body.gender,
     admin:true
    })
  if(data)
  res.send({
    message:"admin register successfully",
    status:true
  })
else
res.send("not register")}
    catch(err){res.send(err)}
    }    

//controller for getting all user and products by admin
controller.product_user=async(req,res)=>{
        try{ const products=await productmodel.find()
         const user=await usermodel.find()
         if(products.length>0||user.length>0)
         {res.send({
             data:{products,user} 
         })}
        /* else if(products.length>0)
         {res.send({
            data:products
        })}
        else if(user.length>0)
        {res.send({
            data:user
        })}*/
        else
         res.send("no products and users")
     }
         catch(err){res.send(err)}
     }


//controller for creating product by admin
controller.createbook=async(req,res)=>{
    const body=req.body
    try{
      const availableproduct=await productmodel.findOne({ProductName:body.productname,ProductCompany:body.productcompany})
      if(availableproduct)
     { res.send("product already exists")}
      else{
        const fileName=req.files.uploadFiles.name
        const file=req.files.uploadFiles
        const uploadPath="E:/wipro/finalcapstone/frontend/src/image/"+fileName
       file.mv(uploadPath)

     const data=await productmodel.create({
      ProductName:body.productname,
      ProductCompany:body.productcompany,
      Quantity:body.quantity,
      Cost:body.cost,
      Category:body.category,
      Image:fileName
     
    })
    if(data){
  res.send({
    message:"product added successfully",
    status:true
  })}
  else
  {res.send("not added yet")}}}
    catch(err){res.send(err)}
    }
    

    //controller for deleting products by admin
    controller.deletebook=async(req,res)=>{
        const body=req.params
      try{
        const productdata=await productmodel.findOneAndDelete({id:body.id})
        if(productdata)
        {res.send({message:"deleted successfully",
                   status:true})}
      else
     {res.send({message:"product does not exists",status:false})}
       
        }
        catch(err)
        {res.send(err)}
      }
      
      // controller for updating products by admin
      controller.updatebook=async(req,res)=>{
        const par=req.params       
        const newproductquantity=req.body.newproductquantity
        console.log(newproductquantity)
        try{
          const book=await productmodel.findOneAndUpdate({_id:par.id},{Quantity:newproductquantity})
          if(book)
          res.send({
                  message:"product name updated successfully",
                  status:true})
          else
          res.send(
              {message:"old product is not found",
              status:false})
        }
        catch(err){res.send(err)}
      }

      //controller for creating user by admin
      controller.createuser=usercontroller.register

      //controller for deleting user by admin
      controller.deleteuser=async(req,res)=>{
        const body=req.params
      try{
        const user=await usermodel.findOneAndDelete({_id:body.id})
        if(user)
        {  if(!user.admin)
          {res.send({message:"deleted successfully",
                   status:true})}
            else
            {res.send({message:"you're admin not user",status:false})}
                  }
                   
      else
     {res.send({message:"user does not exists",status:false})}
       
        }
        catch(err)
        {res.send(err)}
      }
      

     //controller for updating user password by admin 
      controller.updateuser=async(req,res)=>{
        const id=req.params
        const newpassword=req.body.password
        
        try{
          const user=await usermodel.findOneAndUpdate({_id:id},{password:newpassword})
          if(user)
          res.send({data:user,
                  message:"password updated successfully",
                  status:true})
          else
          res.send(
              {message:"oldpasssword is incorrect",
              status:false})
        }
        catch(err){res.send(err)}
      }
   //controller for getting stocks of specific products
      controller.getstock=async(req,res)=>{
        const id=req.params.id
        try{
          const productid=await productmodel.findOne({id:id})
          if(productid){
            const stock=productid.Quantity
            res.send({
              status:true,
              stock:stock
            })
          }
          else
          res.send("product does not exists")
        }
        catch(err){console.log(err)}
      }

        
     


  

     
module.exports=controller