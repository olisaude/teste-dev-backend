const {listClients} = require('../Models/ListClientsModel');

const listClientsService = async () => {
  return await listClients();
};

module.exports = {
  listClientsService,
};
