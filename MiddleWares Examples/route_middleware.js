const express=require('express')
const route=express.Router();



route.use('/',(req, res,next)=>{
    console.log("Router middleware... ");
    next();
})

route.get('/',(req,res)=>{
    res.send("Route ");
})

app.listen(3000,()=>
{
    console.log("Server Start..")
})
