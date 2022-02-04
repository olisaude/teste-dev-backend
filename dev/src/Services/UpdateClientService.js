const {ObjectId} = require('bson');
const {updateClient} = require('../Models/UpdateClientModel');
const erroConstructor = require('../Utils/erroConstructor');

const updateClientService = async (id, editClient) => {
  if (!id) {
    throw erroConstructor(400, 'Customer not registered');
  }
  return await updateClient(ObjectId(id), editClient);
};

module.exports = {
  updateClientService,
};
