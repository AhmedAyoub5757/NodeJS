const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});

    if(req.url === '/'){
        res.end("welcome to our homepage");
    }else if(req.url === '/about'){
        res.end("welcome to our about page");
    }else if(req.url === '/contact'){
        res.end("welcome to our contact page");
    }else{
        // res.writeHead(404,{'Content-Type':'text/plain'}); this will always causse error because we already set the header to prevent it we can set header in every if else block
        res.end("404 page not found");  
    }

});

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/');
});

