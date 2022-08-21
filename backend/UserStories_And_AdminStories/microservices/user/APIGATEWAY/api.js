const express=require("express")
const server=express()
const config=require("./config")
const cors=require("cors")
server.use(cors())

const {createProxyMiddleware}=require("http-proxy-middleware")
server.use("/login",createProxyMiddleware({
    target:config.SIGNINURL,
    changeOrigin:true, 
    pathRewrite:{"^/login":"/log"}
}))
server.use("/register",createProxyMiddleware({
    target:config.SIGNUPURL,
    changeOrigin:true,
    pathRewrite:{"^/register":"/reg"}
}))

module.exports=server