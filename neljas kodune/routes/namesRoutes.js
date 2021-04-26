const express = require('express');
const namesController = require('../controllers/namesController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();

///////////////NAMES

//Get all names
router.get('/names', isLoggedIn, namesController.getNames);

//Get specific name by id
router.get('/names/:id', isLoggedIn, namesController.getName);

//Update a name selected by id
//example body contents:
//{"name": "Rasketankide moodulid"}
router.patch('/names/:id', isLoggedIn, isAdmin, namesController.updateName);

//Delete a name selected by id
router.delete('/names/:id', isLoggedIn, isAdmin, namesController.deleteName);

//Create a name
router.post('/names', isLoggedIn, isAdmin, namesController.createName);

module.exports = router;