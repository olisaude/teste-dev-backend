/* eslint-disable max-lines-per-function */
const getCriticalClients = require('../models/getCriticalClients');

module.exports = async () => {
  const criticos = await getCriticalClients();
  const novo = criticos
    .sort((a, b) => (a.score < b.score ? 1 : -1))
    .slice(0, 10)
    .map((client) => {
      const {
        _id,
        name,
        birthDate,
        gender,
        problems,
        creationDate,
        editedDate,
      } = client;
      return {
        _id,
        name,
        birthDate,
        gender,
        problems,
        creationDate,
        editedDate,
      };
    });
  return novo;
};
