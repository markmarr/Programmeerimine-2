const express = require('express');
const coursesController = require('../controllers/coursesController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////COURSES

//Get all courses
router.get('/courses', isLoggedIn, coursesController.getCourses);

//Get specific course by weekId & lessonId
router.get('/courses/:weekId/:lessonId', isLoggedIn, coursesController.getCourse);

//Update a course selected by weekId & lessonId
//example body contents:
//{"courseId": 2}
router.patch('/courses/:weekId/:lessonId', isLoggedIn, isAdmin, coursesController.updateCourse);

//Delete a course selected by weekId & lessonId
router.delete('/courses/:weekId/:lessonId', isLoggedIn, isAdmin, coursesController.deleteCourse);

//Create a course in a specific week & lesson (weekId, lessonId)
router.post('/courses/:weekId/:lessonId', isLoggedIn, isAdmin, coursesController.createCourse);


module.exports = router;