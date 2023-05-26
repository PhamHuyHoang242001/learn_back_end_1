const router = require("express").Router();
const borrowController = require("../controllers/borrowController");

//Add borrow request
router.post("/", borrowController.addBorrow);

// //Get all borrow request
router.get("/", borrowController.getAllBorrow);

// //Get a borrow request
router.post("/:id", borrowController.getBorrow);

// //Update a borrow request
router.put("/:id", borrowController.updateBorrow);

module.exports = router;
