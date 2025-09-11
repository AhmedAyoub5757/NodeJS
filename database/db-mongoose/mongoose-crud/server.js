import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', bookRoutes);


mongoose.connect('mongodb://localhost:27017/mongoose-crud').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB', err);
});

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log(`API is running on http://localhost:${PORT}`);
})