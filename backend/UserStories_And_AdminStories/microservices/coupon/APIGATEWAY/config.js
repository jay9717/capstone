require("dotenv").config()
const CONFIG={
    WWW_PORT:process.env.PORT,
    CREATEURL:process.env.CREATEURL,
    GETURL:process.env.GETURL,
   
}
module.exports=CONFIG