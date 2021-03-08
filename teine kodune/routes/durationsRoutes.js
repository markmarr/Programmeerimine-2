const express = require('express');
const durationsController = require('../controllers/durationsController');

const router = express.Router();

///////////////DURATIONS

//Get all durations
router.get('/durations', durationsController.getDurations);

//Get specific duration by weekId & lessonId
router.get('/durations/:weekId/:lessonId', durationsController.getDuration);

//Update a duration selected by weekId & lessonId
//example body contents:
//{"duration": 2.5 }
router.patch('/durations/:weekId/:lessonId', durationsController.updateDuration);

//Delete a duration selected by weekId & lessonId
router.delete('/durations/:weekId/:lessonId', durationsController.deleteDuration);

//Create a duration in a specific week & lesson (weekId, lessonId)
router.post('/durations/:weekId/:lessonId', durationsController.createDuration);


module.exports = router;