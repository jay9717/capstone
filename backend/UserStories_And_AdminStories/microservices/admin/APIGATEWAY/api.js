const express=require("express")
const server=express()
const config=require("./config")
const cors=require("cors")
server.use(cors())

const {createProxyMiddleware}=require("http-proxy-middleware")
server.use("/adminlogin",createProxyMiddleware({
    target:config.SIGNINURL,
    changeOrigin:true, 
    pathRewrite:{"^/adminlogin":"/login"}
}))
server.use("/adminregister",createProxyMiddleware({
    target:config.SIGNUPURL,
    changeOrigin:true,
    pathRewrite:{"^/adminregister":"/register"}
}))

module.exports=server