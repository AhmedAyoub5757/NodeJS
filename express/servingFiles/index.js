import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

// app.get('/', (req,res)=>{
//     res.send("Hello World");
// })

app.get('/files', (req,res)=>{
    res.sendFile(path.join(__dirname, 'files', 'a.txt'));
})

app.get('/download', (req, res)=>{
    res.download(path.join(__dirname, 'files', 'a.pdf'));
})

app.use('/static', express.static(path.join(__dirname, 'files')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

