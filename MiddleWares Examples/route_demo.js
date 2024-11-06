const express = require('express');
const app = express();

const student=require('./bulit-in_middleware');

app.use('/student',student)

app.use('/admin',student)

app.listen(3000,()=>{
    console.log("SERVER STARTED @http://localhost:4000");
})