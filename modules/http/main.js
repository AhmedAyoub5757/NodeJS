const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api") {
    const data = { message: "This is a GET request response" };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }
  else if (req.method === "POST" && req.url === "/api") {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();

    })
    req.on('end', () => {
        const data = { message: "Data received", body: body };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    });
  }
  else{
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }

});


server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});