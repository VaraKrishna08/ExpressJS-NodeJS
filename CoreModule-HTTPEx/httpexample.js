const http=require('http');
const fs=require('fs');

const server =http.createServer((req,res)=>
{
    if(req.method==='GET' && req.url==='/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync('home.html'))
    }
    else if(req.method==='GET' && req.url==='/contact/')
    {
       res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync('contact.html'))
    }
    else if(req.method==='GET' && req.url==='/about/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync('about.html'))
    }
    else if (req.method==='GET' && req.url==='/content/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync('content.html'))
    }
    else if(req.method==='GET' && req.url==='/demo/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(fs.readFileSync('demo.html'))
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Invalid")
    }
});
server.listen(3000,()=>{
    console.log("Server Start..");
});


