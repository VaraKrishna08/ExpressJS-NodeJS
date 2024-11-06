const mongoose=require('mongoose')
const schema =mongoose.Schema({
    id:Number,
    name:String,
    sem:Number,
    branch:String ,
    spi:String,
});

module.exports=mongoose.model('Student',schema);

