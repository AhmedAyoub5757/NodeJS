const fss = require('fs');

let bfs = fss.ReadStream("bigfile.txt", "utf-8");

bfs.on('data', (chunk) => {
    console.log(chunk);
});

bfs.on('end', () => {
    console.log("Finished reading the file.");
});