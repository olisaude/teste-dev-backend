const Joi = require('joi').extend(require('@hapi/joi-date'));
const errorHandling = require('../utils/functions/errorHandling');
const { badRequest, notFound, conflict } = require('../utils/dictionary/statusCode');
const {
  invalidEntry,
  invalidDate,
  clientNotFound,
  clientAlreadyRegistered,
} = require('../utils/dictionary/messagesDefault');
const {
  create,
  getClientById,
  getClientByNameAndBirthDate,
  update,
} = require('../models/client.model');

const clientSchema = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  healthProblems: Joi.array().items(Joi.string()),
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

  if (error) throw errorHandling(badRequest, invalidEntry);
};

const validateDate = (date) => {
  const { error } = dateSchema.validate({
    date,
  });

  if (error) throw errorHandling(badRequest, invalidDate);
};

const createClient = async ({
  name, gender, healthProblems, birthDate, creationDate,
}) => {
  validateClient(name, gender, healthProblems);
  validateDate(birthDate);

  const clientAlreadyExists = await getClientByNameAndBirthDate(name, birthDate);

  if (clientAlreadyExists) throw errorHandling(conflict, clientAlreadyRegistered);

  const id = await create(name, gender, healthProblems, birthDate, creationDate);
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

const updateClient = async (name, gender, healthProblems, birthDate, updateDate) => {
  validateClient(name, gender, healthProblems);
  validateDate(birthDate);
  const client = await update(name, gender, healthProblems, birthDate, updateDate);
  if (!client) throw errorHandling(notFound, clientNotFound);

  return client;
};

module.exports = {
  createClient,
  findClientById,
  findClientByNameAndBirthDate,
  updateClient,
};
