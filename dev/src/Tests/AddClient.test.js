const {expect} = require('chai');
const sinon = require('sinon');
const {MongoClient} = require('mongodb');
const {getConnection} = require('./mongoMockConnection');


describe('Adiciona um novo cliente', () => {
  const clientModel = {
    create: () => {
      return {};
    },
  };
  const payloadClient = {
    name: 'Client Test',
    birthDate: '01/01/1999',
    gender: 'F',
    healthProblems: ['test', 1],
  };

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });

  describe('When it is successfully entered', () => {
    it('returns an object', () => {
      const response = clientModel.create(payloadClient);

      expect(response).to.be.an('object');
    });

    it('there must be a registered customer', () => {
      clientModel.create(payloadClient);
      const clientCreated = connectionMock
          .db('OLI_SAUDE')
          .collection('clients')
          .findOne({name: payloadClient.name});
      expect(clientCreated).to.be.not.null;
    });
  });
});
