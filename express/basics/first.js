import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World! This is my first Express server.');
})

app.get('/about', (req, res)=>{
    res.send('This is the about page.');
})

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});