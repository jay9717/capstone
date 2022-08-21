require("dotenv").config()
const CONFIG={
    WWW_PORT:process.env.PORT,
    SIGNINURL:process.env.SIGNINURL,
    SIGNUPURL:process.env.SIGNUPURL,
    INFOURL:process.env.INFOURL
}
module.exports=CONFIG