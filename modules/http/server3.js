const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Home Page</h1><p>Welcome to my Node.js server!</p>');
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>About Page</h1><p>This is the about page of my Node.js server.</p>');
    }else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Contact Page</h1><p>Contact us </p>');
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>404 Page Not Found</h1><p>The page you are looking for does not exist.</p>');  
    }
});

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/');
});