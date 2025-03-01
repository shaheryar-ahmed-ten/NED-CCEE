const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { createTodo, getTodos, updateTodo, deleteTodo } = require("../controller/todo.controller");

// Protected routes - user must be logged in
router.post("/", authMiddleware, createTodo);
router.get("/", authMiddleware,getTodos);
router.put("/:id", authMiddleware, updateTodo);
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;
