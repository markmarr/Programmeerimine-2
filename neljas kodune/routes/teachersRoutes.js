const express = require('express');
const teachersController = require('../controllers/teachersController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////TEACHERS

//Get all teachers
router.get('/teachers', isLoggedIn, teachersController.getTeachers);

//Get specific teacher by id
router.get('/teachers/:id', isLoggedIn, teachersController.getTeacher);

//Update a teacher selected by id
//example body contents:
//{"name": "Laine Lemmik"}
router.patch('/teachers/:id', isLoggedIn, isAdmin, teachersController.updateTeacher);

//Delete a teacher selected by id
router.delete('/teachers/:id', isLoggedIn, isAdmin, teachersController.deleteTeacher);

//Create a teacher
router.post('/teachers/', isLoggedIn, isAdmin, teachersController.createTeacher);

module.exports = router;