const Todo = require("../models/Todo");

// Create a new todo
const createTodo = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task) return res.status(400).json({ message: "Task is required" });

        const todo = new Todo({
            task,
            userId: req.user.userId, // Extracted from authMiddleware
        });

        await todo.save();
        res.status(201).json({ message: "Todo created", data: todo });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

// Get all todos for the logged-in user
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.user.userId });
        res.status(200).json({ data: todos });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

// Update a todo
const updateTodo = async (req, res) => {
    try {
        const { task, completed } = req.body;
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            { task, completed },
            { new: true }
        );

        if (!todo) return res.status(404).json({ message: "Todo not found" });

        res.status(200).json({ message: "Todo updated", data: todo });
    } catch (error) {
        console.log("err",error);   
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.userId,
        });

        if (!todo) return res.status(404).json({ message: "Todo not found" });

        res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
};
