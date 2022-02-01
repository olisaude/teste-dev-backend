const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const {
  after, before, describe, it,
} = require('mocha');

const clientModel = require('../../src/models/client.model');
const currentDate = require('../../src/utils/functions/currentDate');
const scoreFunc = require('../../src/utils/functions/score');
const { getConnection } = require('./mockMongoConnection');

describe('Insere um cliente novo no BD', () => {
  const payloadClient = {
    name: 'Mariana',
    gender: 'Female',
    healthProblems: ['Pressão alta', 'Grau 1', 'Refluxo', 'Grau 2'],
    birthDate: '17-03-1994',
    creationDate: currentDate(),
  };
  const score = scoreFunc(payloadClient.healthProblems);

  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('OliSaude').collection('clients').drop();
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna o id do novo cliente', async () => {
      const response = await clientModel.create({ ...payloadClient, score });

      expect(response).to.be.a('object');
    });

    it('o objeto possui o id do novo cliente', async () => {
      const response = await clientModel.create({ ...payloadClient, score });

      expect(response).to.have.a.property('id');
    });
  });
});
