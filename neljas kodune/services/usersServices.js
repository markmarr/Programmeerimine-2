const bcrypt = require('bcrypt');
const jwtService = require('./jwtService');
const config = require('../config');
const saltRounds = config.saltRounds;
const db = require('../db');

const usersService = {};

usersService.getUsers = async () => {
  const users = await db.query('SELECT id, firstName, lastName, email, role FROM users WHERE deleted = 0');
  return users;
};

usersService.getUser = async (id) => {
  const user = await db.query('SELECT id, firstName, lastName, email, role FROM users WHERE id = ? AND deleted = 0', [id]);
  if (user[0]) {
    return user[0];
  }
  return false;
};

usersService.createUser = async (newUser) => {
  const hash = await bcrypt.hash(newUser.password, saltRounds);
  const user = {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    password: hash,
    role: 'admin',
  };
  const result = await db.query('INSERT INTO users SET ?', [user]);
  return result.insertId;
};

usersService.deleteUser = async (id) => {
  const result = await db.query('UPDATE users SET deleted = 1 WHERE id = ?', [id]);
  return true;
};

usersService.updateUser = async (user) => {
  const userToUpdate = {};
  if (user.firstName) {
    userToUpdate.firstName = user.firstName;
  }
  if (user.lastName) {
    userToUpdate.lastName = user.lastName;
  }
  if (user.email) {
    userToUpdate.email = user.email;
  }
  if (user.password) {
    const hash = await bcrypt.hash(user.password, saltRounds);
    userToUpdate.password = hash;
  }
  console.log(userToUpdate);
  await db.query('UPDATE users SET ? WHERE id = ?', [userToUpdate, user.id]);
  return true;
};

usersService.getUserByEmail = async (email) => {
  const user = await db.query('SELECT * FROM users WHERE email = ? AND deleted = 0', [email]);
  return user[0];
};

usersService.login = async (login) => {
  const { email, password } = login;
  const user = await usersService.getUserByEmail(email);
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