const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const {
  after, before, describe, it,
} = require('mocha');
const { getConnection } = require('./mockMongoConnection');
const clientModel = require('../../src/models/client.model');
const clientsExample = require('../utils/clients');

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
      const clients = await clientModel.getTenHighScores();

      expect(clients).to.be.a('array');
    });

    it('o array está vazio', async () => {
      const clients = await clientModel.getTenHighScores();

      expect(clients).to.be.empty;
    });
  });

  describe('Quando existem clientes', () => {
    before(async () => {
      connectionMock.db('OliSaude').collection('clients').insertMany(clientsExample);
    });

    it('retorna uma array', async () => {
      const clients = await clientModel.getTenHighScores();

      expect(clients).to.be.a('array');
    });

    it('tem 10 clientes', async () => {
      const clients = await clientModel.getTenHighScores();

      expect(clients).to.be.length(10);
    });

    it('o primeiro cliente tem o score de 100', async () => {
      const clients = await clientModel.getTenHighScores();

      const client = clients[0];

      expect(client.score).to.be.equal(100);
    });
  });
});
