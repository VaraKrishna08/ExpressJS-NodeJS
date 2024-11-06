const http=require('http')
const { type } = require('os')
const server=http.createServer((req,res)=>
{
    //get method
    if(req.method==="GET" && req.url==="/")
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Get Method Called.....");
    }
    //Post Method
    else if(req.method==="POST" && req.url==="/submit")
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Post  Method Called.....");
    }
    //Put Method
    else if(req.method==="PUT" && req.url.startsWith("/update/") )
    {
        res.writeHead(200,{"content-type":"text/plain"});
        const id=req.url.split('/')[2];
        res.end(`Put Method Called.....,${id}`);
       // console.log( "Id ",req.url.split("/")[2]);  
       
    }
    //Delete  Method
    else if(req.method==="DELETE" && req.url.startsWith("/delete/"))
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Delete Method Called....");
        //console.log("Id ",req.url.split("/")[2]);  
    }
    else
    {

    }
});
server.listen(5000,()=>{
    console.log("Server Started Successfully..");
});