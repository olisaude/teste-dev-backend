const listClient = require('../models/listClients');

module.exports = async () => {
  const clients = await listClient();

  return clients;
};