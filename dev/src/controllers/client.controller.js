const { createClient } = require('../services/client.service');
const { created } = require('../utils/dictionary/statusCode');

const userCreate = async (req, res, _next) => {
  const { name, gender, health_problems, birth_date } = req.body;
  const creation_date = Date();
  try {
    const id = await createClient(name, gender, health_problems, birth_date, creation_date);

    const newCustomer = {
      _id: id,
      name,
      birth_date,
      gender,
      health_problems,
      creation_date,
    }

    return res.status(created).json({ 'registered customer': newCustomer });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  userCreate,
};
