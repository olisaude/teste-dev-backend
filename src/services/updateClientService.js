const Joi = require('@hapi/joi');
const updateClient = require('../models/updateClient');
const { badRequest } = require('../utils/statusCode');
const errorHandler = require('../utils/errorHandler');

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  birthDate: Joi.date().required(),
  gender: Joi.string().required(),
  problems: Joi.array().required(),
  creationDate: Joi.date().required(),
  editedDate: Joi.date().required(),
});

module.exports = async (id, update) => {
  const { error } = schema.validate(update);

  if (error) {
    throw errorHandler(badRequest, error.message);
  }
  const client = await updateClient(id, update);

  if (!client) {
    throw errorHandler(badRequest, 'Client not found');
  }
  
  return client;
};