const router = require("express").Router();
const bookController = require("../controllers/bookController");

//Add book
router.post("/", bookController.addBook);

//Get all books
router.get("/", bookController.getAllBook);

//Get a book
router.get("/:id", bookController.getBook);

//Update book
router.put("/:id", bookController.updateBook);

//Delete book
router.delete("/:id", bookController.deleleBook);

module.exports = router;