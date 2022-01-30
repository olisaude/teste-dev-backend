const {
  createClient,
  findClientById,
  findClientByNameAndBirthDate,
  updateClient,
} = require('../services/client.service');
const { created, success } = require('../utils/dictionary/statusCode');
const currentDate = require('../utils/functions/currentDate');
const scoreFunction = require('../utils/functions/score');

const clientCreate = async (req, res, next) => {
  const {
    name, gender, healthProblems, birthDate,
  } = req.body;
  const creationDate = currentDate();
  const score = scoreFunction(healthProblems);

  try {
    const id = await createClient(
      name,
      gender,
      healthProblems,
      birthDate,
      creationDate,
      score,
    );

    const newCustomer = {
      _id: id,
      name,
      gender,
      healthProblems,
      birthDate,
      creationDate,
      score,
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

const clientUpdate = async (req, res, next) => {
  try {
    const {
      name, gender, healthProblems, birthDate,
    } = req.body;
    const updateDate = currentDate();
    const score = scoreFunction(healthProblems);
    const client = await updateClient(name, gender, healthProblems, birthDate, updateDate, score);

    return res.status(success).json(client);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  clientCreate,
  getClientByIdController,
  getClientByNameAndBirthDateController,
  clientUpdate,
};
