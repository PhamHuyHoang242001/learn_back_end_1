const router = require("express").Router();
const userController = require("../controllers/userController");

//Add book
router.post("/", userController.addUser);

// //Get all users
router.get("/", userController.getAllUser);

// //Get a user
router.post("/check", userController.checkUser);

// //Update user
router.put("/update", userController.updateUser);

// //Delete user
// router.delete("/:id", userController.deleleUser);

module.exports = router;