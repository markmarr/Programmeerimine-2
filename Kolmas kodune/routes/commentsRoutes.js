const express = require('express');
const commentsController = require('../controllers/commentsController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////COMMENTS

//Get all comments
router.get('/comments', isLoggedIn, commentsController.getComments);

//Get specific comment by weekId & lessonId
router.get('/comments/:weekId/:lessonId', isLoggedIn, commentsController.getComment);

//Update a comment selected by weekId & lessonId
//example body contents
//{ "comment": "toimub Google Meetis" }
router.patch('/comments/:weekId/:lessonId', isLoggedIn, isAdmin, commentsController.updateComment);

//Delete a comment selected by weekId & lessonId
router.delete('/comments/:weekId/:lessonId', isLoggedIn, isAdmin, commentsController.deleteComment);

//Create a comment in a specific week & lesson (weekId, lessonId)
router.post('/comments/:weekId/:lessonId', isLoggedIn, isAdmin, commentsController.createComment);

module.exports = router;