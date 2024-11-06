const express =require('express')
const app=express();
const fs=require('fs');
app.get('/',(req, res)=>{
    res.send("Get Method Called... ");
})

app.post('/submit/',(req,res)=>{
    res.send("Post Method Called...")
})

app.put('/put/',(req,res)=>{
    const id=req.url.split('/')[2];
    
    console.log(`Put Method Called.....,${id}`);
})

app.delete('/delete/',(req,res)=>{
    res.send("Delete Method Called...");
})

app.listen(3000,()=>
{
    console.log("Server Start..")
})