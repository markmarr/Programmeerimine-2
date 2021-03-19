const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();
const validators = require('../middlewares/validators');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');

/**
 * Users API endpoints
 */
router
  .get('/users', isLoggedIn, isAdmin, usersController.getUsers)
  .get('users/:id', isLoggedIn, validators.getUserById, usersController.getUserById)
  .post('/users', usersController.createUser)
  .post('/login', usersController.login)
  .patch('users/:id', isLoggedIn, isAdmin, usersController.updateUser)
  .delete('users/:id', isLoggedIn, isAdmin, usersController.deleteUser);

module.exports = router;