const express=require("express")
const server=express()
const config=require("./config")
const cors=require("cors")
server.use(cors())

const {createProxyMiddleware}=require("http-proxy-middleware")
server.use("/admincreatecoupon",createProxyMiddleware({
    target:config.CREATEURL,
    changeOrigin:true, 
    pathRewrite:{"^/admincreatecoupon":"/create"}
}))
server.use("/admingetcoupon",createProxyMiddleware({
    target:config.GETURL,
    changeOrigin:true,
    pathRewrite:{"^/admingetcoupon":"/get"}
}))

module.exports=server