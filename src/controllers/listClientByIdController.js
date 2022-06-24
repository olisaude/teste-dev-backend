const listClientByIdService = require('../services/listClientByIdService');
const { success } = require('../utils/statusCode');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const client = await listClientByIdService(id);
    
    return res.status(success).json(client);
  } catch (error) {
    return next(error);
  }
};