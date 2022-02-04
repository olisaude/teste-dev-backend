const {addClientService} = require('../Services/AddClientServices');

const addClientController = async (req, res, next) => {
  try {
    const {name, birthDate, gender, healthProblems} = req.body;
    const addClient = await addClientService({
      name, birthDate, gender, healthProblems});
    res.status(201).json(addClient);
  } catch (error) {
    next(error);
  }
};

module.exports = {addClientController};
