import mongoose from "mongoose";
import validator, { stripLow } from "validator";

const librarySchema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
});

export const Book = mongoose.model('Libray', librarySchema);