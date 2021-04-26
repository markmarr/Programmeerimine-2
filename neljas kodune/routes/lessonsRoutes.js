const express = require('express');
const lessonsController = require('../controllers/lessonsController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////lessons

//Get all lessons
router
  .get('/lessons', isLoggedIn, isAdmin, lessonsController.getLessons)
  .get('/lessons/:id', isLoggedIn, lessonsController.getLesson)
  .post('/lessons', lessonsController.createLesson)
  .patch('/lessons/:id', isLoggedIn, isAdmin, lessonsController.updateLesson)
  .delete('/lessons/:id', isLoggedIn, isAdmin, lessonsController.deleteLesson);

module.exports = router;

