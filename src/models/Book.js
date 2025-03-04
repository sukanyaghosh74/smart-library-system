const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    isbn: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: [String], required: true },
    copies: { type: Number, required: true },
    available_copies: { type: Number, required: true },
    location: { type: String, required: true },
    rating: { type: Number, default: 0 },
    borrowed_count: { type: Number, default: 0 },
    reviews: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number, comment: String }]
});

module.exports = mongoose.model("Book", BookSchema);
