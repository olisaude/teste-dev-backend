const sinon = require('sinon');
const {expect} = require('chai');
const {MongoClient} = require('mongodb');
const {getConnection} = require('./mongoMockConnection');
// const {ObjectId} = require('mongodb');

describe('List all system clients', () => {
  const clientModel = {
    create: () => {
      return [{}];
    },
  };
  const payloadClient = {
    name: 'Client Test',
    birthDate: '01/01/1999',
    gender: 'F',
    healthProblems: ['test', 1],
  };

  it('returns an array of objects', () => {
    before(async () => {
      const connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    const response = clientModel.create([payloadClient]);

    expect(response).to.be.an('array');
  });
});
