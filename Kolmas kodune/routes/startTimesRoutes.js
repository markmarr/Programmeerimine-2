const express = require('express');
const starttimesController = require('../controllers/starttimesController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////StartTimes

//Get all StartTimes
router.get('/starttimes', isLoggedIn, starttimesController.getStarttimes);

//Get specific StartTime by weekId & lessonId
router.get('/starttimes/:weekId/:lessonId', isLoggedIn, starttimesController.getStarttime);

//Update a StartTime selected by weekId & lessonId
//example body contents:
//{"StartTime": new Date("2021-02-25T17:30+02:00")}
router.patch('/starttimes/:weekId/:lessonId', isLoggedIn, isAdmin, starttimesController.updateStarttime);

//Delete a StartTime selected by weekId & lessonId
router.delete('/starttimes/:weekId/:lessonId', isLoggedIn, isAdmin, starttimesController.deleteStarttime);

//Create a StartTime in a specific week & lesson (weekId, lessonId)
router.post('/starttimes/:weekId/:lessonId', isLoggedIn, isAdmin, starttimesController.createStarttime);

module.exports = router;