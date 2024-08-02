const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(3000,()=>{
    console.log("server is running on port http://localhost/3000");
})