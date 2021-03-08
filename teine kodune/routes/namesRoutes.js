const express = require('express');
const namesController = require('../controllers/namesController');

const router = express.Router();

///////////////NAMES

//Get all names
router.get('/names', namesController.getNames);

//Get specific name by weekId & lessonId
router.get('/names/:weekId/:lessonId', namesController.getName);

//Update a name selected by weekId & lessonId
//example body contents:
//{"name": "Rasketankide moodulid"}
router.patch('/names/:weekId/:lessonId', namesController.updateName);

//Delete a name selected by weekId & lessonId
router.delete('/names/:weekId/:lessonId', namesController.deleteName);

//Create a name in a specific week & lesson (weekId, lessonId)
router.post('/names/:weekId/:lessonId', namesController.createName);

module.exports = router;