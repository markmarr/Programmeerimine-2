const express = require('express');
const roomsController = require('../controllers/roomsController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();


///////////////ROOMS

//Get all rooms
router.get('/rooms', isLoggedIn, roomsController.getRooms);

//Get specific room by weekId & lessonId
router.get('/rooms/:weekId/:lessonId', isLoggedIn, roomsController.getRoom);

//Update a room selected by weekId & lessonId
//example body contents:
//{"room": 105}
router.patch('/rooms/:weekId/:lessonId', isLoggedIn, isAdmin, roomsController.updateRoom);

//Delete a room selected by weekId & lessonId
router.delete('/rooms/:weekId/:lessonId', isLoggedIn, isAdmin, roomsController.deleteRoom);

//Create a room in a specific week & lesson (weekId, lessonId)
router.post('/rooms/:weekId/:lessonId', isLoggedIn, isAdmin, roomsController.createRoom);

module.exports = router;