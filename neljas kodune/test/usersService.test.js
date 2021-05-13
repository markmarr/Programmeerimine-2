const usersService = require('../services/usersServices');
const { assert } = require('chai');
const { expect } = require('chai')

let existingUser = {
  id: 11,
  firstName: "Andrus",
  lastname: "Helde",
  email: "asde@ee.co",
  role: "supra"
};

describe('Users service', function () {
  describe('GetUsers', function () {
    it('should return array of users', async function () {
      const users = await usersService.getUsers();
      assert.isArray(users);
    });
  });
  describe('GetUser', function () {
    it('should a be defined and have keys', async function () {
      const user = await usersService.getUser(existingUser.id);
      assert.isDefined(user);
      assert.isNotNull(user);
      expect(user).to.have.keys(['firstName', 'lastName', 'email', 'role', 'id']);
    });
  });
});