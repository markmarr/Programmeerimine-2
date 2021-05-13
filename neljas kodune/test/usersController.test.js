const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');

let newUserId;
let adminToken;

const adminUser = {
  email: 'admin@admin.ee',
  password: 'admin',
};

const newUser = {
  firstName: 'Tiina',
  lastName: 'Tina',
  email: 'tiina@tina.ee',
  password: 'tina',
};

const newUserUpdated = {
  firstName: 'Kaspar',
  lastName: 'Kaas',
  email: 'kaspar@kaas.ee',
};



describe('Users controller', function () {
  describe('GET /users', function () {
    it('responds with error message in json and statusCode 403', async function () {
      const response = await request(app).get('/users');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(403);
      expect(response.body.error).to.equal('No authorization header');
    });
  });
describe('POST /users', async function() {
    it('responds with error message in json and statusCode 400 because of missing data', async function () { //timeout error tekib sellest ITist
        const response = await request(app).post('/users');
        expect(response.body).to.be.a('object');
        expect(response.statusCode).to.equal(400);
        expect(response.body.error).to.equal('Required data is missing.');
      });
  it('responds with id of created user', async function () {
    const response = await request(app).post('/users').send(newUser);
    newUserId = response.body.id;
    expect(response.body).to.be.a('object');
    expect(response.statusCode).to.equal(201);
    expect(response.body.id).to.be.a('number');
  });
});
describe('POST /users/login', function () {
  it('responds with token', async function () {
    const response = await request(app).post('/users/login').send(adminUser);
    expect(response.body).to.be.a('object');
    expect(response.statusCode).to.equal(200);
    expect(response.body.token).to.be.a('string');
    adminToken = response.body.token;
  });
});
describe('DELETE /users', function () {
  it('responds with id of created user', async function () {
    const response = await request(app).delete(`/users/${newUserId}`).set('Authorization', `Bearer ${adminToken}`);
    expect(response.statusCode).to.equal(204);
  });
});

describe('GET /users/id', function () {
  it('responds status code 200', async function () {
    const response = await request(app).get(`/users/2`).set('Authorization', `Bearer ${adminToken}`);
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.a('object');
   
  });
});
describe('PATCH /users', function () {
  it('responds status code 200 and success message in object', async function () {
    const response = await request(app).patch(`/users/${newUserId}`).set('Authorization', `Bearer ${adminToken}`).send(newUserUpdated);
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.a('object');
    
  });
});
});