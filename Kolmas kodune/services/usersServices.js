const bcrypt = require('bcrypt');
const jwtService = require('./jwtService');
const config = require('../config');
const saltRounds = config.saltRounds;
const database = require('../database');

const usersService = {};

usersService.getUsers = () => {
  return database.users;
};

usersService.getUser = (id) => {
  const user = database.users.find((element) => element.id === id);
  if (user) {
    return user;
  }
  return false;
};

usersService.createUser = async (newUser) => {
  const id = database.users.length + 1;
  const hash = await bcrypt.hash(newUser.password, saltRounds);
  const user = {
    id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    password: hash,
    role: 'admin',
  };
  database.users.push(user);
  return id;
};

usersService.deleteUser = (id) => {
  const index = database.users.findIndex((element) => element.id === id);
  database.users.splice(index, 1);
  return true;
};

usersService.updateUser = (user) => {
  const index = database.users.findIndex((element) => element.id === user.id);
  if (user.firstName) {
    database.users[index].firstName = user.firstName;
  }
  if (user.lastName) {
    database.users[index].lastName = user.lastName;
  }
  if (user.email) {
    database.users[index].email = user.lastName;
  }
  return true;
};

usersService.getUserByEmail = (email) => {
  const user = database.users.find((element) => element.email === email);
  if (user) return user;
  return false;
};

usersService.login = async (login) => {
  const { email, password } = login;
  const user = usersService.getUserByEmail(email);
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = await jwtService.sign(user);
      return token;
      //return "faketoken";
    }
  }
  return false;
};

module.exports = usersService;