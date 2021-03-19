const express = require('express');
const teachersController = require('../controllers/teachersController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////TEACHERS

//Get all teachers
router.get('/teachers', isLoggedIn, teachersController.getTeachers);

//Get specific teacher by weekId & lessonId
router.get('/teachers/:weekId/:lessonId', isLoggedIn, teachersController.getTeacher);

//Update a teacher selected by weekId & lessonId
//example body contents:
//{"teacher": "Laine Lemmik"}
router.patch('/teachers/:weekId/:lessonId', isLoggedIn, isAdmin, teachersController.updateTeacher);

//Delete a teacher selected by weekId & lessonId
router.delete('/teachers/:weekId/:lessonId', isLoggedIn, isAdmin, teachersController.deleteTeacher);

//Create a teacher in a specific week & lesson (weekId, lessonId)
router.post('/teachers/:weekId/:lessonId', isLoggedIn, isAdmin, teachersController.createTeacher);

module.exports = router;