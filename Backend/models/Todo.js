const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        task: { type: String, required: true },
        completed: { type: Boolean, default: false },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link todo to a user
    },
    { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
