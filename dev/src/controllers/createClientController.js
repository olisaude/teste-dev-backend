const createClientService = require('../services/createClientService');
const { created } = require("../utils/statusCode");

module.exports = async (req, res, next) => {
  try {
    const client = req.body;
    const createdClient = await createClientService(client);
    return res.status(created).json(createdClient);
  } catch (error) {
    return next(error);
  }
};