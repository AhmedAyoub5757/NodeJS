import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello World! This is my second Express server. I have utilized nodemon to restart the server automatically on code changes. and dotenv to manage environment variables.');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});