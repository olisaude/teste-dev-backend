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

describe('PUT /clients/', () => {
  describe('quando o cliente é encontrado com sucesso', () => {
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
      await chai.request(app).post('/clients').send(clients[0]);

      const clientUpdate = {
        name: 'Morgana',
        birthDate: '16-05-1998',
        gender: 'Female',
        healthProblems: [
          'Pressão alta',
          'Grau 6',
          'refluxo',
          'grau 6',
          'diabetes',
          'grau 6',
          'gastrite',
          'grau 1',
        ],
      };

      response = await chai.request(app)
        .put('/clients').send(clientUpdate);
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

    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(
        URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true },
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
      await chai.request(app).post('/clients').send(clients[0]);

      const clientUpdate = {
        name: 'Moana',
        birthDate: '16-05-1998',
        gender: 'Female',
        healthProblems: [
          'Pressão alta',
          'Grau 6',
          'refluxo',
          'grau 6',
          'diabetes',
          'grau 6',
          'gastrite',
          'grau 1',
        ],
      };

      response = await chai.request(app)
        .put('/clients').send(clientUpdate);
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
