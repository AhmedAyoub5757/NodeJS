import express from 'express';
// import { Book } from '../models/Book';
import { Book } from '../models/Book.js';


const router = express.Router();

router.post('/books', async (req, res) => {
    try{
        const { title, author, pages, price } = req.body;
        const book = new Book({ title, author, pages, price });
        const savedBook = await book.save();
        res.status(201).json(savedBook);        
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.get('/books', async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);        
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.get('/books/:id', async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book) return res.status(404).json({message: 'Book not found'});
        res.status(200).json(book);        
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

router.put('/books/:id', async (req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!book) return res.status(404).json({message: 'Book not found'});
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

router.delete('/books/:id', async (req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);   
        if(!book) return res.status(404).json({message: 'Book not found'});
        res.status(200).json({message: 'Book deleted successfully'});
    }   
    catch(err){
        res.status(500).json({message: err.message});
    }
});

export default router;
