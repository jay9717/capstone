const express=require("express")
const userrouter=express.Router()
const auth=require("../../Authentication/auth")
const user=require("../Controllers/usercontroller")
// userrouter.post("/login" ,user.login)        //for login user
// userrouter.post("/register",user.register)  //for register user
userrouter.get("/logout",user.logout)       //for logout user
userrouter.post("/postcart/:id",user.read)  //for adding  books to readlater section through id
userrouter.post("/postwishlist/:id",user.like)  //for adding books to like section  through id
userrouter.get("/getwishlist",user.getlikebook) //for getting readlater books
userrouter.get("/getcart",user.getreadbook) // for getting liked books

module.exports=userrouter