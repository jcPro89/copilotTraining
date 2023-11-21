// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Get all comments
router.get('/', commentsController.getAllComments);

// Get comment by id
router.get('/:id', commentsController.getCommentById);

// Add new comment
router.post('/', commentsController.addComment);

// Update comment
router.put('/:id', commentsController.updateComment);

// Delete comment
router.delete('/:id', commentsController.deleteComment);

module.exports = router;