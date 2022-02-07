const {expect} = require('chai');
const sinon = require('sinon');
const {MongoClient} = require('mongodb');
const {getConnection} = require('./mongoMockConnection');
const {ObjectId} = require('mongodb');

describe('Find the customer by ID', () => {
  const ID_EXEMPLE = '61fd63cd6b5c03d1349ad12e';
  before(async () => {
    const connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  it('when there is a customer for the given ID', () => {
    before(async () => {
      const clientCollection = await getConnection();
      await clientCollection.db('OLI_SAUDE').collection('clients').insertOne({
        _id: ObjectId(ID_EXEMPLE),
        name: 'Client Test',
        birthDate: '01/01/1999',
        gender: 'F',
        healthProblems: ['test', 1],
      });
    }),

    after(async () => {
      MongoClient.connect.restore();
    });
  });
});
