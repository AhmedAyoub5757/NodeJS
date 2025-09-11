import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    author: {type: String, default: 'Unknown'},
    pages: {type: Number, min: 0},
    price: {type: Number, min: 0},
    createdAt: {type: Date, default: Date.now}
})

export const Book = mongoose.model('Book', bookSchema);