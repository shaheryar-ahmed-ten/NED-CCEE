const express = require('express');
const commentRouter = require("./comments.routes")
const authRouter = require("./auth.routes")
const todoRoutes = require("./todo.routes");


const router = express.Router();

router.use("/comments", commentRouter);
router.use("/auth", authRouter);
router.use("/todos", todoRoutes);

module.exports = router;

