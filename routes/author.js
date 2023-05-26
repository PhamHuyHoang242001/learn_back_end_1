const router = require("express").Router();
const authorController = require("../controllers/authorController");

//Add author
router.post("/", authorController.addAuthor);

//Get all authors
router.get("/", authorController.getAllAuthor);

//Get an author
router.get("/:id", authorController.getAuthor);

//Update author
router.put("/:id", authorController.updateAuthor);

//Delete author
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;