const express = require('express');
const teachersController = require('../controllers/teachersController');

const router = express.Router();

///////////////TEACHERS

//Get all teachers
router.get('/teachers', teachersController.getTeachers);

//Get specific teacher by weekId & lessonId
router.get('/teachers/:weekId/:lessonId', teachersController.getTeacher);

//Update a teacher selected by weekId & lessonId
//example body contents:
//{"teacher": "Laine Lemmik"}
router.patch('/teachers/:weekId/:lessonId', teachersController.updateTeacher);

//Delete a teacher selected by weekId & lessonId
router.delete('/teachers/:weekId/:lessonId', teachersController.deleteTeacher);

//Create a teacher in a specific week & lesson (weekId, lessonId)
router.post('/teachers/:weekId/:lessonId', teachersController.createTeacher);

module.exports = router;