const Joi = require('@hapi/joi');
const createClient = require('../models/createClient');
const errorHandler = require('../utils/errorHandler');
const { badRequest } = require("../utils/statusCode");

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  birthDate: Joi.date().required(),
  gender: Joi.string().required(),
  problems: Joi.array().required(),
  creationDate: Joi.date().required(),
  editedDate: Joi.date().required(),
});

module.exports = async (client) => {
  const { error } = schema.validate(client);
  if (error) {
    throw errorHandler(badRequest, error.message);
  }
  return await createClient(client);
};