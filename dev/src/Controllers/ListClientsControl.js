const {listClientsService} = require('../Services/ListClientsService');

const listClientsController = async (_req, res, next) => {
  try {
    const allClients = await listClientsService();
    res.status(200).json(allClients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listClientsController,
};
