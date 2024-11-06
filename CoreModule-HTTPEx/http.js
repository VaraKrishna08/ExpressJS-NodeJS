const http=require("http");
http.createServer((req,res)=>{
    res.write("<h1>hello</h1>");
   // req.write ("http//localhost:3000");
    res.end();
}).listen(3000);
console.log("server is started on port 3000");
