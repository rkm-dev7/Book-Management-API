const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const bookRouter = require("./routes/books.route");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes middleware
app.use("/books", bookRouter);
// server
const PORT = process.env.PORT || 8000;

// Connect to DB and start server
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost${PORT}`);
    });
  })
  .catch((err) => console.log(err));
