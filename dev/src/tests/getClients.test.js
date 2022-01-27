/* eslint-disable no-return-await */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const clients = require('./dataTest');

const app = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /clients', function () {
  describe('if to have success to get all clients', function () {
    let response = {};
    const DBServer = new MongoMemoryServer();
    before(async function () {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      Promise.all(
        clients.forEach(
          async (client) =>
            await chai.request(app).post('/clients').send(client),
        ),
      );

      response = await chai.request(app).get('/clients');
    });

    after(async function () {
      MongoClient.connect.restore();
      await DBServer.stop();
    });
    it('should return status 200', function () {
      expect(response).to.have.status(200);
    });

    it('should return an array', function () {
      expect(response.body).to.be.an('array');
    });
    it('should return all clients', function () {
      expect(response.body).to.have.lengthOf(clients.length);
    });
  });
});
