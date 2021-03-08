const express = require('express');
const commentsController = require('../controllers/commentsController');

const router = express.Router();

///////////////COMMENTS

//Get all comments
router.get('/comments', commentsController.getComments);

//Get specific comment by weekId & lessonId
router.get('/comments/:weekId/:lessonId', commentsController.getComment);

//Update a comment selected by weekId & lessonId
//example body contents
//{ "comment": "toimub Google Meetis" }
router.patch('/comments/:weekId/:lessonId', commentsController.updateComment);

//Delete a comment selected by weekId & lessonId
router.delete('/comments/:weekId/:lessonId', commentsController.deleteComment);

//Create a comment in a specific week & lesson (weekId, lessonId)
router.post('/comments/:weekId/:lessonId', commentsController.createComment);

module.exports = router;
