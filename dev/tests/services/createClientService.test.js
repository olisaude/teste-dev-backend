const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const {
  after, before, describe, it,
} = require('mocha');

const clientService = require('../../src/services/client.service');
const clientModel = require('../../src/models/client.model');
const currentDate = require('../../src/utils/functions/currentDate');
const scoreFunc = require('../../src/utils/functions/score');

describe('Insere um novo cliente no BD', () => {
  describe('quando o cliente é inserido com sucesso', async () => {
    const payload = {
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
    };

    before(async () => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(clientModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      clientModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await clientService.createClient(payload);

      expect(response).to.be.a('object');
    });
  });
});
