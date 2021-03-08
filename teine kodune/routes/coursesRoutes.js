const express = require('express');
const coursesController = require('../controllers/coursesController');

const router = express.Router();

///////////////COURSES

//Get all courses
router.get('/courses', coursesController.getCourses);

//Get specific course by weekId & lessonId
router.get('/courses/:weekId/:lessonId', coursesController.getCourse);

//Update a course selected by weekId & lessonId
//example body contents:
//{"courseId": 2}
router.patch('/courses/:weekId/:lessonId', coursesController.updateCourse);

//Delete a course selected by weekId & lessonId
router.delete('/courses/:weekId/:lessonId', coursesController.deleteCourse);

//Create a course in a specific week & lesson (weekId, lessonId)
router.post('/courses/:weekId/:lessonId', coursesController.createCourse);


module.exports = router;