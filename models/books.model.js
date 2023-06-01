const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publishedYear: {
    type: Number,
  },
});

//mongoose.model() function is used to create a model from the defined schema. The model allows to interact with the MongoDB collection corresponding to the schema.

const Book = mongoose.model("Book", bookSchema); // The first argument to mongoose.model() is the singular name of the collection, and the second argument is the schema.

module.exports = Book;
