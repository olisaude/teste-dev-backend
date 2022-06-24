const updateClientService = require('../services/updateClientService');
const { success } = require('../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const client = await updateClientService(id, update);

    return res.status(success).json(client);
  } catch (error) {
    return next(error);
  }
};