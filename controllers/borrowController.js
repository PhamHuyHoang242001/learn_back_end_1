const { Borrow, User, Book } = require('../model/model');
const borrowController = {
     //Add Borrow Request
    addBorrow: async (req, res) => {
        try {
            if(!req.body.user)
            res.status(400).json(req.body);
            if(!req.body.book)
            res.status(401).json(req.body);
            const newBorrow = new Borrow(req.body);
            const savedBorrow = await newBorrow.save();
            // const user = User.findById(req.body.user);
            // const book = Book.findById(req.body.book);
            
            // await author.updateOne({ $push: { user: user._id, book: book._id } });

            res.status(200).json(req.body);
        } catch (err) {
            res.status(500).json(err);
        }
    },
     //Get all Borrow Request
     getAllBorrow: async (req, res) => {
        try {
            const borrows = await Borrow.find().populate("user").populate("book");
            res.status(200).json(borrows);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Get a Borrow Request
    getBorrow: async (req, res) => {
        try {
            const borrow = await Borrow.findById(req.params.id);
            res.status(200).json(borrow);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Update a Borrow Request
    updateBorrow: async (req, res) => {
        try {
            const borrow = await Borrow.findById(req.params.id);
            await borrow.updateOne({ $set: req.body });
            res.status(200).json("Updated sucessfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },
};

module.exports = borrowController;