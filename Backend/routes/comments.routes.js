const express = require('express');
const router = express.Router();
const authenticated = require('../middlewares/authMiddleware');


const { getComments, getCommentById } = require("../controller/comments.controller");

router.get('/', authenticated, getComments)
router.get('/:id', authenticated, getCommentById)

module.exports = router;