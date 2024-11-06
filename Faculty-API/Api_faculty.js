 const express=require('express')

const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const Faculty=require('./Faculty')

mongoose.connect('mongodb://localhost:27017/College').then(()=>{
    console.log("Server Connected Local....");
    const app=express();
    app.use(bodyParser.urlencoded());

    app.get('/',async(req,res)=>{
        const data=await Faculty.find();
        res.json(data);
    });


    app.get('/:id',async(req,res)=>{
        const id=req.params.id;
        const data=await Faculty.findOne({id:id});
        res.json(data);

    });

    app.post('/',async(req,res)=>{
        const { id,
            FacultyName,
            FacultyDesignation,
            FacultyEducationQualification,
            FacultyExperience,
            FacultyWorkingSince,
            FacultyImage}=req.body;
        const faculty=Faculty();
        faculty.id=id;
        faculty.FacultyName=FacultyName;
        faculty.FacultyDesignation=FacultyDesignation;
        faculty.FacultyEducationQualification=FacultyEducationQualification;
        faculty.FacultyExperience=FacultyExperience;
        faculty.FacultyWorkingSince=FacultyWorkingSince;
        faculty.FacultyImage=FacultyImage;
        const data=await faculty.save();
        res.json(data);

    });
        

    app.put('/:id',async(req,res)=>{
        const {FacultyWorkingSince}=req.body;
        const data=await Faculty.findOne({id:req.params.id});
        data.FacultyWorkingSince=FacultyWorkingSince;
        data.save();
        res.json(data);
    });

    app.delete('/:id',async(req,res)=>{
        const data=await Faculty.deleteOne({id:req.params.id});
        //data.save();
        res.json(data);
    });   
    

    app.listen(3000,()=>{
        console.log("Server Start.....");
    })

})
