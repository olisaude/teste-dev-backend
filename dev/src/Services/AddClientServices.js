const Joi = require('@hapi/joi');
const {addClient} = require('../Models/AddClientModel');
const errorConstructor = require('../Utils/erroConstructor');

const schema = Joi.object({
  name: Joi.string().required(),
  birthDate: Joi.date().required(),
  gender: Joi.string().required(),
  healthProblems: Joi.array().required(),
});

const addClientService = async (client) => {
  const {error} = schema.validate(client);
  if (error) {
    throw errorConstructor(400, error.message);
  }
  return await addClient(client);
};

module.exports = {addClientService};
