const chai = require('chai');
const {
  describe, it, before, after,
} = require('mocha');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../api/index');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /clients', () => {
  describe('quando é criado com sucesso', () => {
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

      response = await chai.request(app)
        .post('/clients')
        .send({
          name: 'Mariana',
          gender: 'Female',
          healthProblems: [
            'Pressão alta',
            'Grau 1',
            'Refluxo',
            'Grau 2',
          ],
          birthDate: '17-03-1994',
          creationDate: '29-1-2022',
          score: '54.98',
        });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "_id"', () => {
      expect(response.body).to.have.property('_id');
    });
  });

  describe('Quando o payload é inválido', () => {
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

      response = await chai.request(app)
        .post('/clients')
        .send({});
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('recebe o status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it(
      'a propriedade "message" possui o texto "Invalid entries. Try again."',
      () => {
        expect(response.body.message)
          .to.be.equal('Invalid entries. Try again.');
      },
    );
  });
});
