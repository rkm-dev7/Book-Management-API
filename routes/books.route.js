const express = require("express");
const bookController = require("../controllers/books.controller");
const router = express.Router();

// GET /books: Retrieve all books
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.createBook);
router.delete("/:id", bookController.deleteBook);
router.patch("/:id", bookController.updateBookById);

module.exports = router;
