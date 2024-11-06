const fs=require('fs')
fs.exists('pathex.js',(exists)=>{console.log(exists)});

fs.stat('pathex.js',(err,stat)=>{console.log(stat)});
//fs.readFile('ex.txt',(err,data)=>{console.log(data.toString())})

/*const d=fs.readFileSync('ex1.txt',(err,data)=>{
    console.log(d.toString())
});
*//*
fs.writeFile('ex.txt','Hello',
    (err,data)=>{
    console.log(data)
}
*//*
fs.appendFile('ex.txt','hii',
    (err,data)=>{
    console.log(data)
});

fs.rename('ex.txt','demo.txt',(err)=>{console.log(err)});*/
fs.unlink('demo.txt',(err)=>{console.log(err)})



Another Example

const fs=require('fs');
//exists
fs.exists('http_ex.js',(exists)=>{
    console.log("File exists",exists);
})
    //sync//
const exists=fs.existsSync("http_ex.js");
console.log("File existsSync",exists);

//state
fs.stat('http_ex.js',(err,stat)=>{
    console.log("File Stat",stat);
})
   //sync//
//const stat=fs.statSync("abc.txt");
//console.log(stat);
//read file
/*fs.readFile('http_ex.js',(err,data)=>{
    console.log("File Read ",data.toString());
})*/
    /*sync
const data=fs.readFileSync("http_ex.js");
console.log(data.toString());
*/
//write file
/*fs.writeFile('ex1.txt','this is writefile',(err,data)=>{ 
    console.log("File Write ",data);
})
   /*sync
const data=fs.writeFileSync("http_ex.js",'write..');
console.log(data);

//appendfile

fs.appendFile('ex1.txt','hiii',(err,data)=>{
    console.log(err);
})
    /*sync
const err=fs.appendFileSync("http_ex.js","hello");
console.log(err);*/

//open file

fs.open("ex1.txt",(err,fd)=>{
    if(err){
        console.log(err);
    }
    console.log("file open",fs);
})

      /*sync
const err=fs.openSync("http_ex.js");
console.log(err);*/
