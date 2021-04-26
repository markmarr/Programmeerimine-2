const usersService = require('../services/usersServices');

const usersController = {};

/**
 * Get all users
 * GET - /users
 * Required values: none
 * Optional values: none
 * Success: status 200 - OK and list of users
 */
usersController.getUsers = async (req, res) => {
  const users = await usersService.getUsers();
  return res.status(200).json({
    users
  });
};


/**
 * Get user by user id
 * GET - /users/:id
 * Required values: id
 * Optional values: none
 * Success: status 200 - OK and user with specified id
 * Error: status 400 - Bad Request and error message
 */
usersController.getUserById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = await usersService.getUser(id);
  if (user) {
    res.status(200).json({
      user
    });
  } else {
    res.status(400).json({
      error: `No user found with id: ${id}`,
    });
  }
};

/**
 * Create new user
 * POST - /users
 * Required values: firstName, lastName, email, password
 * Optional values: none
 * Success: status 201 - Created and id of created user
 * Error: status 400 - Bad Request and error message
 */
usersController.createUser = async (req, res) => {
  const {
    firstName, lastName, email, password
  } = req.body;
  if (firstName && lastName && email && password) {
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    const id = await usersService.createUser(user);
    if (id) {
      res.status(201).json({
        id,
      });
    } else {
      res.status(500).json({
        error: 'Something went wrong while creating user.',
      });
    }
  }
};

/**
 * User login
 * POST - /users
 * Required values: email, password
 * Optional values: none
 * Success:
 * Error: status 400 - Bad Request and error message
 */
usersController.login = async (req, res) => {
  const {
    email, password
  } = req.body;
  if (email && password) {
    const login = {
      email,
      password
    };
    const token = await usersService.login(login);
    if (token) {
      res.status(200).json({
        token
      });
    } else {
      res.status(403).json({
        error: 'Wrong email or password'
      });
    }
  } else {
    res.status(400).json({
      error: 'Email or password missing'
    });
  }
};

/**
 * Delete user
 * DELETE - /users/:id
 * Required values: id
 * Optional values: none
 * Success: status 204 - No Content
 * Error: status 400 - Bad Request and error message
 */
usersController.deleteUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  // Check if user exists
  const user = await usersService.getUser(id);
  if (user) {
    const success = await usersService.deleteUser(id);
    if (success) {
      res.status(204).end();
    } else {
      res.status(500).json({
        error: 'Something went wrong while deleting user',
      });
    }
  } else {
    res.status(400).json({
      error: `No user found with id: ${id}`,
    });
  }
};

/**
 * Update user
 * PATCH - /users/:id
 * Required values: id, firstName OR lastName
 * Optional values: firstName, lastName
 * Success: status 200 - OK and success message
 * Error: status 400 - Bad Request and error message
 */
 usersController.updateUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;
  if (!id || (!firstName || !lastName || !email || !password)) {
    res.status(400).json({
      error: 'Id, firstName, lastName, email or password is missing',
    });
  }
  const user = await usersService.getUser(id);
  if (!user) {
    res.status(400).json({
      error: `No user found with id: ${id}`,
    });
  }
  const userToUpdate = {
    id,
    firstName,
    lastName,
    email,
    password,
  };
  const success = await usersService.updateUser(userToUpdate);
  if (!success) {
    return res.status(500).json({
      error: 'Something went wrong while updating user',
    });
  }
  return res.status(200).json({
    success: true,
  });
};

module.exports = usersController;