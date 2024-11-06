const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Product=require('./Product');

mongoose.connect('mongodb://localhost:27017/College').then(()=>{
    console.log("Server Connectedd....");
    const app=express();
    app.use(bodyParser.urlencoded());

    app.get('/',async(req,res)=>{
       const data=await Product.find(); 
       res.json(data);
    })

    app.get('/:id',async(req,res)=>{
        const id=req.params.id;
       const data=await Product.findOne({id:id});
       res.json(data) 
    })

    app.post('/',async(req,res)=>{
        const {id,Name,
            Price,
            Quantity,
            Category,
            Description}=req.body;
            const product=Product();
        product.id=id;
        product.Name=Name;
        product.Price=Price;
        product.Quantity=Quantity;
        product.Category=Category;
        product. Description=Description
        const data=await product.save();
        res.json(data);

    });

    app.put("/:id",async(req,res)=>{
        const{Price}=req.body;
        const result=await Product.findOne({id:req.params.id});
        result.Price=Price;
        result.save();
        res.json(result);
    });

    app.delete("/:id",async(req,res)=>{
        const result=await Product.deleteOne({id:req.params.id});
        res.json(result);
    });

    app.listen(3000,()=>{
        console.log("Server Start..")
    })

}
)