const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const {
  after, before, describe, it,
} = require('mocha');
const { getConnection } = require('./mockMongoConnection');
const clientModel = require('../../src/models/client.model');

const EXAMPLE_ID = '61e88aa7152585d9a885f0bb';
const EXAMPLE_NAME = 'Marina';
const EXAMPLE_BIRTH_DATE = '21/01/2021';

describe('Busca um cliente específico do BD', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('OliSaude').collection('clients').drop();
    MongoClient.connect.restore();
  });

  describe('busca um cliente pelo id', () => {
    let response;

    describe('Quando o cliente é encontrado', () => {
      before(async () => {
        const { insertedId } = await connectionMock.db('OliSaude').collection('clients').insertOne({
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

        response = await clientModel.getClientById(insertedId);
      });

      it('retorna um objeto', async () => {
        expect(response).to.be.a('object');
      });

      it('o objeto tem a propriedade _id', () => {
        expect(response).to.have.a.property('_id');
      });
    });

    describe('Quando o cliente não é encontrado', () => {
      before(async () => {
        response = await await clientModel.getClientById(EXAMPLE_ID);
      });

      it('retorna null', () => {
        expect(response).to.be.null;
      });
    });
  });

  describe('busca um cliente pelo nome e data de nascimento', () => {
    let response;

    describe('Quando o cliente é encontrado', () => {
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

        response = await clientModel
          .getClientByNameAndBirthDate('Mariana', '17-03-1994');
      });

      it('retorna um objeto', () => {
        expect(response).to.be.a('object');
      });

      it('o objeto tem a propriedade _id', () => {
        expect(response).to.have.a.property('_id');
      });
    });

    describe('Quando o cliente não é encontrado', () => {
      before(async () => {
        response = await clientModel
          .getClientByNameAndBirthDate(EXAMPLE_NAME, EXAMPLE_BIRTH_DATE);
      });

      it('retorna null', () => {
        expect(response).to.be.null;
      });
    });
  });
});
