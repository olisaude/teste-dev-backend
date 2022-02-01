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

describe('Altera um cliente do BD', () => {
  const payloadClient = {
    name: 'Mariana',
    gender: 'Female',
    healthProblems: ['Pressão alta', 'Grau 1', 'Refluxo', 'Grau 2'],
    birthDate: '17-03-1994',
    creationDate: '17-01-2022',
    updateDate: currentDate(),
  };
  const {
    name, gender, healthProblems, birthDate, creationDate, updateDate,
  } = payloadClient;
  const score = scoreFunc(healthProblems);

  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);

    await clientModel.create(
      name,
      gender,
      healthProblems,
      birthDate,
      creationDate,
      score,
    );
  });

  after(async () => {
    await connectionMock.db('OliSaude').collection('clients').drop();
    MongoClient.connect.restore();
  });

  describe('quando é alterado com sucesso', () => {
    it('retorna o cliente alterado', async () => {
      const response = await clientModel.update(
        name,
        gender,
        healthProblems,
        birthDate,
        updateDate,
        score,
      );

      expect(response).to.be.a('object');
    });

    it('o objeto possui a propriedade updateDate', async () => {
      const response = await clientModel.update(
        name,
        gender,
        healthProblems,
        birthDate,
        updateDate,
        score,
      );

      expect(response).to.have.a.property('updateDate');
    });
  });
});
