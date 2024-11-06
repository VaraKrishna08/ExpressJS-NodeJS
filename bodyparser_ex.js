const bodyParser=require('body-parser')
const express =require('express')
const app=express();
app.use(bodyParser.json)

let data=[
    {id:1,name:"abc"},
    {id:2,name:"def"},
]


app.get('/',(req,res)=>{
    res.json(data);
});
//getbyid
app.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const item=data.find((item)=>item.id=id);
    if(item){
        res.json(item)
    }
    else{
        res.json({message:"Not Found..."});
    }
    res.json(data)

})
/*
app.post('/:name',(req,res)=>{
    const name=req.params.name;
    const id=data.length+1;
    const o={id,name};
    data.push(o)
    res.json(data);
});*/
app.post('/',(req,res)=>{
    const {name}=req.body;
    const id=data.length+1;
    const o={id,name};
    data.push(o)
    res.json(data);
});

app.put("/:id/:name",(req,res)=>{
    const id=parseInt(req.params.id);
    const name=req.params.name;
   const index=data.findIndex((item)=>(item.id=id));
   if(index!=-1){
    data[index].name=name;
    res.json(data);
   }
   else{
    res.json({message:"Not Found..."});
   }
});

app.delete("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    data=data.filter((item)=>item.id!==id)
    res.json(data);
})

app.listen(3000,()=>{
    console.log("Server Start.")
})
