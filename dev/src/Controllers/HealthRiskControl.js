const {healthRiskServices} = require('../Services/HealthRiskServices');

const healthRiskController = async (_req, res, next) => {
  try {
    const healthRiskClients = await healthRiskServices();
    res.status(200).json(healthRiskClients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  healthRiskController,
};
