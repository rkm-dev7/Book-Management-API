const Book = require("../models/books.model");

// Retrieve all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Retrieve a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.send(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body); //The new Book(req.body) creates a new document of the Book model
    await book.save(); //book.save() is used to save the newly created book document to the MongoDB database.
    res.status(201).send(book);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a book by Id
exports.updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a new book by Id
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
