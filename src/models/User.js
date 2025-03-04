const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "admin"], default: "student" },
    borrowedBooks: [{ bookId: mongoose.Schema.Types.ObjectId, dueDate: Date }],
    history: [{ bookId: mongoose.Schema.Types.ObjectId, borrowedAt: Date, returnedAt: Date }]
});

module.exports = mongoose.model("User", UserSchema);
