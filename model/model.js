const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: String,
    },
    category: {
        type: [String]
    },
    author: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
        }
    ],

});

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 1,
    }
});

const borrowSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: "User",
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        require: true, 
        ref: "Book",
    },
    status: {
        type: Number,
        default: 0,
    },
    created_at: {
        type: Date, 
        default: Date.now
    },
    updated_at: {
        type: Date, 
        default: Date.now
    },
});

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);
let User = mongoose.model("User", userSchema);
let Borrow = mongoose.model("Borrow", borrowSchema);
module.exports = { Book, Author, User, Borrow };