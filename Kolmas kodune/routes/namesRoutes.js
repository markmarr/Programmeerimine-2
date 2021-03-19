const express = require('express');
const namesController = require('../controllers/namesController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////NAMES

//Get all names
router.get('/names', isLoggedIn, namesController.getNames);

//Get specific name by weekId & lessonId
router.get('/names/:weekId/:lessonId', isLoggedIn, namesController.getName);

//Update a name selected by weekId & lessonId
//example body contents:
//{"name": "Rasketankide moodulid"}
router.patch('/names/:weekId/:lessonId', isLoggedIn, isAdmin, namesController.updateName);

//Delete a name selected by weekId & lessonId
router.delete('/names/:weekId/:lessonId', isLoggedIn, isAdmin, namesController.deleteName);

//Create a name in a specific week & lesson (weekId, lessonId)
router.post('/names/:weekId/:lessonId', isLoggedIn, isAdmin, namesController.createName);

module.exports = router;