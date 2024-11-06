const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const Student=require('./Student')
mongoose.connect('mongodb://localhost:27017/College').then(()=>{
    console.log("Connected...");
    const app=express();
    app.use(bodyParser.urlencoded());

    app.get('/',async(req,res)=>{
         const data=await Student.find();
        res.json(data);

    });
    app.get('/:id',async(req,res)=>{
        const id=req.params.id;
        const data=await Student.findOne({id:id});
        res.json(data);

    });

    app.post('/',async(req,res)=>{
        const {id,name,sem,branch,spi}=req.body;
        const student=Student();
        student.id=id;
        student.name=name;
        student.sem=sem;
        student.branch=branch;
        student.spi=spi;
        const data=await student.save();
        res.json(data);

    });
        
    app.put('/:id',async(req,res)=>{
        const {sem}=req.body;
        const data=await Student.findOne({id:req.params.id});
        data.sem=sem;
        data.save();
        res.json(data);
    });

    app.delete('/:id',async(req,res)=>{
        const data=await Student.deleteOne({id:req.params.id});
        //data.save();
        res.json(data);
    });   
    


    app.listen(3000,()=>{
        console.log("Server Start.")
    });
});
