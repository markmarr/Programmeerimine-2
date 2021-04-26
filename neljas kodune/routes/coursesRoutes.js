const express = require('express');
const coursesController = require('../controllers/coursesController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////COURSES

//Get all courses
router.get('/courses', isLoggedIn, coursesController.getCourses);

//Get specific course by id
router.get('/courses/:id', isLoggedIn, coursesController.getCourse);

//Update a course selected by id
//example body contents:
//{"value": "Tervisejuht 2"}
router.patch('/courses/:id', isLoggedIn, isAdmin, coursesController.updateCourse);

//Delete a course selected by id
router.delete('/courses/:id', isLoggedIn, isAdmin, coursesController.deleteCourse);

//Create a course
router.post('/courses', isLoggedIn, isAdmin, coursesController.createCourse);


module.exports = router;