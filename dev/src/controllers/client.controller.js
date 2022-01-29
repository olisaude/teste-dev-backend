const { createClient, findClientById, findClientByNameAndBirthDate } = require('../services/client.service');
const { created, success } = require('../utils/dictionary/statusCode');
const currentDate = require('../utils/functions/currentDate');

const clientCreate = async (req, res, next) => {
  const { body } = req;
  const creationDate = currentDate();
  const client = {
    ...body,
    creationDate,
  };

  try {
    const id = await createClient(client);

    const newCustomer = {
      _id: id,
      ...client,
    };

    return res.status(created).json(newCustomer);
  } catch (error) {
    next(error);
  }
};

const getClientByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const client = await findClientById(id);

    return res.status(success).json(client);
  } catch (error) {
    next(error);
  }
};

const getClientByNameAndBirthDateController = async (req, res, next) => {
  try {
    const { name, birthDate } = req.body;

    const client = await findClientByNameAndBirthDate(name, birthDate);

    return res.status(success).json(client);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  clientCreate,
  getClientByIdController,
  getClientByNameAndBirthDateController,
};
