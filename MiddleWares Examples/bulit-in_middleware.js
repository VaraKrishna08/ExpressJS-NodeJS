const express = require('express');
const app = express();
//const path=require('path');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send("student built-in-middleware");
})
module.exports=route;

