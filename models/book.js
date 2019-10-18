const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, require: true },
  title: { type: String },
  author: { type: String },
  description: { type: String },
  previewLink: { type: String },
  imgLink: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
