const listClientById = require('../models/listClientById');
const errorHandler = require('../utils/errorHandler');
const { badRequest } = require('../utils/statusCode');

module.exports = async (id) => {
  const client = await listClientById(id);

  if (!client) {
    throw errorHandler(badRequest, 'Client not found');
  }
  return client;
};
