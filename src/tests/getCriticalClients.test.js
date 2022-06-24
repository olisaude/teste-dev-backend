/* eslint-disable mocha/no-hooks-for-single-case */
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

describe('GET /clients/critical', function () {
  const DBServer = new MongoMemoryServer();
  let response = {};
  describe('if have a success', function () {
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

      response = await chai.request(app).get('/clients/critical');
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
    it('should return 10 clients', function () {
      expect(response.body).to.have.lengthOf(10);
    });
    it('if return clients most criticals', function () {
      expect(response.body[0].name).to.be.equal('Mateuzinho');
      expect(response.body[1].name).to.be.equal('Esloveniazinha');
      expect(response.body[2].name).to.be.equal('mariazinha');
      expect(response.body[3].name).to.be.equal('Rogerinho');
      expect(response.body[4].name).to.be.equal('Carol com Cê');
      expect(response.body[5].name).to.be.equal('Juliettezinha');
      expect(response.body[6].name).to.be.equal('BamBamzinho');
      expect(response.body[7].name).to.be.equal('luizinho');
      expect(response.body[8].name).to.be.equal('zefinha');
      expect(response.body[9].name).to.be.equal('vitorino');
    });
  });
});
