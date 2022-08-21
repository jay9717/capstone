const express=require("express")
const adminrouter=express.Router()
const admin=require("../Controllers/admincontroller")
const coupon=require("../Controllers/couponcontroller")
const adminauth=require("../../Authentication/adminauthentication/adminauth")
//adminrouter.post("/login",admin.login)                 //for login admin
//adminrouter.post("/register",admin.register)          //for register admin
adminrouter.get("/logout",admin.logout)
adminrouter.get("/getstock/:id",admin.getstock)               //for logout admin
adminrouter.get("/home",admin.product_user)              // to get all userdetails and bookdetails by admin
adminrouter.post("/createproduct",admin.createbook)      // for creating books by admin
adminrouter.put("/updateproduct/:id",admin.updatebook)       // for update bookedition by admin
adminrouter.delete("/deleteproduct/:id",admin.deletebook) // for delete book by admin through id
adminrouter.post("/createuser",admin.createuser)       //for creating user by admin
adminrouter.post("/updateuser/:id",admin.updateuser)       // for update password of user by admin
adminrouter.delete("/deleteuser/:id",admin.deleteuser) // for delete user by admin through id

// for coupon crud
adminrouter.post("/createcoupon",coupon.create)
adminrouter.get("/getcoupons",coupon.find)
adminrouter.delete("/deletecoupon/:code",coupon.delete)
adminrouter.get("*",(req,res)=>{
  res.redirect("/admin/login")
})                                   // for redirect to route /admin/login if anything other specified route
                                     // is given in admin routes ex=/admin/crud        
                                                      

module.exports=adminrouter