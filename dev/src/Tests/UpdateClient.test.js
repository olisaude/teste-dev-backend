const sinon = require('sinon');
const {MongoClient} = require('mongodb');
const {getConnection} = require('./mongoMockConnection');
const {ObjectId} = require('mongodb');

describe('update a customer', () => {
  const newClientModel = {
    create: () => {
      return {};
    },
  };
  const payloadClient = {
    name: 'Client Test2',
    birthDate: '01/01/1999',
    gender: 'F',
    healthProblems: ['test', 1],
  };

  // before(async () => {
  //   const connectionMock = await getConnection();
  //   sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  // });

  it('When a client is successfully updated', () => {
    before(async () => {
      const clientCollection = await getConnection();
      await clientCollection.db('OLI_SAUDE').collection('clients').updateOne(
          {...newClientModel.create(payloadClient), update: new Date()});
    });
  });
});
