const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api'){
        const data = {
            name: 'John Doe',
            age: 30,
            city: 'New York',
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

    } else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});