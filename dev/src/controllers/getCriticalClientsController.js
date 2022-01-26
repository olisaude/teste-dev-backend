const getCriticalClientsService = require('../services/getCriticalClientsService');

module.exports = async (req, res, next) => {
  try {
    const criticalClients = await getCriticalClientsService();
    
    
    return res.status(200).json(criticalClients);
  } catch (error) {
    return next(error);
  }
};