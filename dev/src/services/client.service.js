const Joi = require('joi').extend(require('@hapi/joi-date'));
const errorHandling = require('../utils/functions/errorHandling');
const { badRequest, notFound, conflict } = require('../utils/dictionary/statusCode');
const {
  invalidEntry,
  invalidDate,
  clientNotFound,
  clientAlreadyRegistered,
  noClientsRegistered,
} = require('../utils/dictionary/messagesDefault');
const {
  create,
  getClientById,
  getClientByNameAndBirthDate,
  getAllClients,
  update,
  getTenHighScores,
} = require('../models/client.model');

const clientSchema = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  healthProblems: Joi.array().items(Joi.string()),
  score: Joi.number(),
});

const dateSchema = Joi.object({
  date: Joi.date().format('DD-MM-YYYY'),
});

const idSchema = Joi.object({
  id: Joi.string().length(24).required(),
});

const validateClientId = (id) => {
  const { error } = idSchema.validate({
    id,
  });

  if (error) throw errorHandling(notFound, clientNotFound);
};

const validateClient = (name, gender, healthProblems) => {
  const { error } = clientSchema.validate({
    name,
    gender,
    healthProblems,
  });
  console.log(error);

  if (error) throw errorHandling(badRequest, invalidEntry);
};

const validateDate = (date) => {
  const { error } = dateSchema.validate({
    date,
  });

  if (error) throw errorHandling(badRequest, invalidDate);
};

const createClient = async (client) => {
  const {
    name, gender, healthProblems, birthDate, creationDate, score,
  } = client;
  validateClient(name, gender, healthProblems, score);
  validateDate(birthDate);

  const clientAlreadyExists = await getClientByNameAndBirthDate(name, birthDate);

  if (clientAlreadyExists) throw errorHandling(conflict, clientAlreadyRegistered);

  const id = await create(client);
  return id;
};

const findClientById = async (id) => {
  validateClientId(id);
  const client = await getClientById(id);

  if (!client) throw errorHandling(notFound, clientNotFound);
  return client;
};

const findClientByNameAndBirthDate = async (name, birthDate) => {
  const client = await getClientByNameAndBirthDate(name, birthDate);

  if (!client) throw errorHandling(notFound, clientNotFound);
  return client;
};

const findAllClients = async () => {
  const clients = await getAllClients();
  if (!clients) throw errorHandling(notFound, noClientsRegistered);
  return clients;
};

const updateClient = async (client) => {
  const {
    name, gender, healthProblems, birthDate, score,
  } = client;
  validateClient(name, gender, healthProblems, score);
  validateDate(birthDate);
  const clientUpdated = await update(client);
  if (!clientUpdated) throw errorHandling(notFound, clientNotFound);

  return client;
};

const findTenHighScores = async () => {
  const clients = await getTenHighScores();
  if (!clients) throw errorHandling(notFound, noClientsRegistered);
  return clients;
};

module.exports = {
  createClient,
  findClientById,
  findClientByNameAndBirthDate,
  findAllClients,
  updateClient,
  findTenHighScores,
};
