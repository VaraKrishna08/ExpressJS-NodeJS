const express=require('express');
const app=express();
const fs=require('fs');

app.get('/', (req, res) => {
    throw new Error('BROKEN')
  })

app.get('/file',(req,res,next)=>{
    fs.readFile("ex.txt",(err,data)=>{
        if(err){
            next(err)
        }else{
            console.log("File Read ",data.toString());
        }
})
})
app.listen(3000,()=>{
    console.log("Server Start..");
})

