const express=require('express')
const app=express();

app.use("/",(req,res,next)=>{
    console.log("App Middleware... ");
    next();
})

app.get('/',(req, res)=>{
    res.send("Get Method Called... ");
})

app.listen(3000,()=>
{
    console.log("Server Start..")
})
