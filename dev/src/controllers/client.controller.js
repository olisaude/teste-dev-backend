/* eslint-disable consistent-return */
const {
  createClient,
  findClientById,
  findClientByNameAndBirthDate,
  findAllClients,
  updateClient,
  findTenHighScores,
} = require('../services/client.service');
const { created, success } = require('../utils/dictionary/statusCode');
const currentDate = require('../utils/functions/currentDate');
const scoreFunction = require('../utils/functions/score');

const clientCreate = async (req, res, next) => {
  const {
    name, gender, healthProblems, birthDate,
  } = req.body;
  const creationDate = currentDate();
  const score = Number(scoreFunction(healthProblems));
  const newClient = {
    name,
    gender,
    healthProblems,
    birthDate,
    creationDate,
    score,
  };

  try {
    const id = await createClient(newClient);

    const newCustomer = {
      _id: id,
      ...newClient,
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
    const { name, birthDate } = req.query;

    // http://localhost:3000/clients/?name=Manana&birthDate=16-05-1998

    const client = await findClientByNameAndBirthDate(name, birthDate);

    return res.status(success).json(client);
  } catch (error) {
    next(error);
  }
};

const getClients = async (req, res, next) => {
  try {
    const clients = await findAllClients();
    return res.status(success).json(clients);
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
    const score = Number(scoreFunction(healthProblems));
    const clientUpdated = {
      name, gender, healthProblems, birthDate, updateDate, score,
    };
    const client = await updateClient(clientUpdated);

    return res.status(success).json(client);
  } catch (error) {
    next(error);
  }
};

const tenHighScores = async (req, res, next) => {
  try {
    const clients = await findTenHighScores();
    return res.status(success).json(clients);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  clientCreate,
  getClientByIdController,
  getClientByNameAndBirthDateController,
  getClients,
  clientUpdate,
  tenHighScores,
};
