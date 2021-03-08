const express = require('express');
const starttimesController = require('../controllers/starttimesController');

const router = express.Router();

///////////////StartTimes

//Get all StartTimes
router.get('/starttimes', starttimesController.getStarttimes);

//Get specific StartTime by weekId & lessonId
router.get('/starttimes/:weekId/:lessonId', starttimesController.getStarttime);

//Update a StartTime selected by weekId & lessonId
//example body contents:
//{"StartTime": new Date("2021-02-25T17:30+02:00")}
router.patch('/starttimes/:weekId/:lessonId', starttimesController.updateStarttime);

//Delete a StartTime selected by weekId & lessonId
router.delete('/starttimes/:weekId/:lessonId', starttimesController.deleteStarttime);

//Create a StartTime in a specific week & lesson (weekId, lessonId)
router.post('/starttimes/:weekId/:lessonId', starttimesController.createStarttime);

module.exports = router;