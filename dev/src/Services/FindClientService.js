const {ObjectId} = require('mongodb');
const {findClient} = require('../Models/FindClientModel');
const erroConstructor = require('../Utils/erroConstructor');

const findClientService = async (id) => {
  if (!ObjectId.isValid(id) || !id) {
    throw erroConstructor(400, 'invalid ID');
  }
  return await findClient(ObjectId(id));
};

module.exports = {
  findClientService,
};
