const listClientService = require('../services/listClientsService');
const { success } = require('../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const clients = await listClientService();

    return res.status(success).json(clients);
  } catch (error) {
    next(error);
  }
};
