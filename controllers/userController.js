const { User } = require("../model/model");

const userController = {
    //Add Author
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(req.body);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllUser: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    },
      //Check user
      checkUser: async (req, res) => {
        try {
            // const myuser = await Author.findById(req.params.id).populate("books");
            const myuser = await User.findOne({ user: req.body.user });
            res.status(200).json(myuser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
     //Update an author
     updateUser: async (req, res) => {
        try {
            const myuser = await User.findOne({ user: req.body.user });
            await myuser.updateOne({ $set: req.body });
            res.status(200).json("Updated sucessfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },
   
};

module.exports = userController;