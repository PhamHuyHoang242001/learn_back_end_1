const { Author, Book } = require("../model/model");

const authorController = {
    //Add Author
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(req.body);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Get all Author
    getAllAuthor: async (req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Get an author 
    getAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Update an author
    updateAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({ $set: req.body });
            res.status(200).json("Updated sucessfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //Delete author
    deleteAuthor: async (req, res) => {
        try {
            await Book.updateMany({ author: req.params.id }, { author: null });
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (error) {
            res.status(500).json(error)
        }
    }
};

module.exports = authorController;