const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const clients = require('./dataTest');

const app = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('PUT /clients/:id', function () {
  const DBServer = new MongoMemoryServer();
  let response = {};
  let clientId = '';
  describe('if have success', function () {
    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      const client = await chai.request(app).post('/clients').send(clients[0]);
      const { _id } = client.body;
      clientId = _id;

      response = await chai
        .request(app)
        .put(`/clients/${_id}`)
        .send(clients[1]);
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('should return status 200', function () {
      expect(response).to.have.status(200);
    });
    it('should return an Object', function () {
      expect(response).to.be.an('object');
    });
    it('if have edited the correct client', function () {
      const { _id } = response.body;
      expect(_id).to.equal(clientId);
    });
    it('should return an Object with the correct properties', function () {
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('birthDate');
      expect(response.body).to.have.property('gender');
      expect(response.body).to.have.property('problems');
      expect(response.body).to.have.property('editedDate');
    });
  });
  describe('if have not success to update a client', function () {
    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      const client = await chai.request(app).post('/clients').send(clients[0]);
      const { _id } = client.body;
      clientId = _id;
      const invalidClient = {};

      response = await chai
        .request(app)
        .put(`/clients/${_id}`)
        .send(invalidClient);
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
    });
    it('should return status 400', function () {
      expect(response).to.have.status(400);
    });
    it('should response have a property message ', function () {
      expect(response.body).to.have.property('message');
    });
  });
});
