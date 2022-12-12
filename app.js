import express from "express";
const server = express();
const st= server.use(express.static("src"))

server.get("*",(req,res)=>{
    res.send(st)
})

server.listen(5713,()=>console.log("okkk....."))