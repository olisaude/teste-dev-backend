const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const clients = require('./dataTest');

const app = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /clients', function () {
  const DBServer = new MongoMemoryServer();
  let response = {};
  describe('if have success', function () {
    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai.request(app).post('/clients').send(clients[0]);
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('should return status code 201', function () {
      expect(response).to.have.status(201);
    });

    it('should return an Object', function () {
      expect(response).to.be.an('object');
    });

    it('should return an Object with the correct properties', function () {
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('birthDate');
      expect(response.body).to.have.property('gender');
      expect(response.body).to.have.property('problems');
      expect(response.body).to.have.property('editedDate');
    });
  });
  describe('if have not success', function () {
    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      const invalidClient = {};
      response = await chai.request(app).post('/clients').send(invalidClient);
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
    });
    it('should return status code 400', function () {
      expect(response).to.have.status(400);
    });
    it('should response have a property message ', function () {
      expect(response.body).to.have.property('message');
    });
  });
});
