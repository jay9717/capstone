const server=require("../signup.js")
const config=require("../config")
const port=config.WWW_PORT
server.listen(port,()=>console.log(`server started at port ${port}`))