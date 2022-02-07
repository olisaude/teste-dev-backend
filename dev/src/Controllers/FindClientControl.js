const {findClientService} = require('../Services/FindClientService');

const findClientControllers = async (req, res, next) => {
  try {
    const {id} = req.params;
    const userId = await findClientService(id);
    res.status(200).json(userId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findClientControllers,
};
