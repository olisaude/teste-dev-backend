const chai = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../api/index');
const clients = require('./utils/clients');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /clients/?name&birthDate', () => {
  describe('quando ocliente é encontrado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(
        URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true },
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
      const client = await chai.request(app).post('/clients').send(clients[0]);

      const { name, birthDate } = client.body;

      response = await chai.request(app)
        .get(`/clients/?name=${name}&birthDate=${birthDate}`);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });
  });

  describe('Quando a requisição é inválida', () => {
    let response = {};
    const falseNAME = 'Juliana';
    const falseBirthDate = '01-01-2022';

    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(
        URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true },
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
      const client = await chai.request(app).post('/clients').send(clients[0]);

      response = await chai.request(app)
        .get(`/clients/?name=${falseNAME}&birthDate=${falseBirthDate}`);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('recebe o status 404', () => {
      expect(response).to.have.status(404);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it(
      'a propriedade "message" possui o texto "Client not found"',
      () => {
        expect(response.body.message)
          .to.be.equal('Client not found');
      },
    );
  });
});
