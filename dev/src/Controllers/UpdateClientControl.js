const {updateClientService} = require('../Services/UpdateClientService');

const updateClientController = async (req, res, next) => {
  try {
    const editClient = await updateClientService(req.params, req.body);
    res.status(200).json(editClient);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateClientController,
};
