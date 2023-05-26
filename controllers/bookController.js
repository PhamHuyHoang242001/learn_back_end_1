const {Author, Book} =  require("../model/model");

const bookController = {
    //Add Author
    addBook: async (req,res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if(req.body.author) {
                for(var i = 0; i < req.body.author.length; i++){
                const author = Author.findById(req.body.author[i]);
                await author.updateOne({ $push: { books: savedBook._id } });
                }
                // const author = Author.findById(req.body.author);
                // const author = Author.find({_id: req.body.author});
            //    await author.updateOne({ $push: { books: savedBook._id } });
                // res.status(200).json(savedBook);
            }
            res.status(200).json(req.body);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Get all Author
    getAllBook: async (req,res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Get a book
    getBook: async (req,res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //Update book
    updateBook: async (req,res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //Delete book
    deleleBook: async (req,res) => {
        try {
            await Author.updateMany(
                { books: req.params.id },
                { $pull: {books: req.params.id }}
                );
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted sucessfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = bookController;