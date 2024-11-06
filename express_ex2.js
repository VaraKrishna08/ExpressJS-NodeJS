const express =require('express');
const fs=require('fs');
const app=express();

app.get('/',(req, res)=>{
    res.send(fs.readFileSync('home.html'))
})

app.get('/about',(req, res)=>{
    res.send(fs.readFileSync('about.html'))
})

app.get('/contact',(req, res)=>{
    res.send(fs.readFileSync('contact.html'))
})

app.get('/content',(req, res)=>{
    res.send(fs.readFileSync('content.html'))
})

app.get('/demo',(req, res)=>{
    res.send(fs.readFileSync('demo.html'))
})

app.get('/fac',(req, res)=>{
    res.send(fs.readFileSync('Api_faculty.js'))
})

app.listen(3000,()=>
{
    console.log("Server Start..")
})