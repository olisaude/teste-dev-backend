const Joi = require('joi').extend(require('@hapi/joi-date'));
const errorHandling = require('../utils/functions/erroHandling');
const { badRequest } = require('../utils/dictionary/statusCode');
const { invalidEntry, invalidDate } = require('../utils/dictionary/messagesDefault');
const { create } = require('../models/client.model');


const clientSchema = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string().required(),
  health_problems: Joi.array().items(Joi.string()),
});

const dateSchema = Joi.object({
  date: Joi.date().format('DD-MM-YYYY'),
});

const validateClient = (name, gender, health_problems) => {
  const { error } = clientSchema.validate({
    name,
    gender,
    health_problems,
  });

  if (error) throw errorHandling(badRequest, invalidEntry);
};

const validateDate = (date) => {
  const { error } = dateSchema.validate({
    date
  });

  if (error) throw errorHandling(badRequest, invalidDate);
};

const createClient = async (name, gender, health_problems, birth_date, creation_date) => {
  validateClient(name, gender, health_problems);
  validateDate(birth_date);

  /* const clientAlreadyExists = await findUserByEmail(email);

  if (emailAlreadyExists) throw errorHandling(conflict, emailAlreadyRegistered); */

  const id = await create(name, gender, health_problems, birth_date, creation_date);
  return id;
};

module.exports = {
  createClient,
};