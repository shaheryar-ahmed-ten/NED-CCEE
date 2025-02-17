const express = require('express');
const commentRouter = require("./comments.routes")

const router = express.Router();

router.use("/comments", commentRouter);

module.exports = router;

