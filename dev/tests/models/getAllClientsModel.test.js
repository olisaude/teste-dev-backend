const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const {
  after, before, describe, it,
} = require('mocha');
const { getConnection } = require('./mockMongoConnection');
const clientModel = require('../../src/models/client.model');

describe('Busca todos os clientes do BD', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('OliSaude').collection('clients').drop();
    MongoClient.connect.restore();
  });

  describe('quando não existe nenhum cliente', () => {
    before(async () => {
      await connectionMock.db('OliSaude').collection('clients').remove({});
    });

    it('retorna um array', async () => {
      const clients = await clientModel.getAllClients();

      expect(clients).to.be.a('array');
    });

    it('o array está vazio', async () => {
      const clients = await clientModel.getAllClients();

      expect(clients).to.be.empty;
    });
  });

  describe('Quando existem clientes', () => {
    before(async () => {
      connectionMock.db('OliSaude').collection('clients').insertOne({
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

    it('retorna uma array', async () => {
      const clients = await clientModel.getAllClients();

      expect(clients).to.be.a('array');
    });

    it('não é um array vazio', async () => {
      const clients = await clientModel.getAllClients();

      expect(clients).to.be.not.empty;
    });

    it('deve ter o cliente cadastrado', async () => {
      const clients = await clientModel.getAllClients();

      const [client] = clients;

      expect(client.name).to.be.eq('Mariana');
    });
  });
});
