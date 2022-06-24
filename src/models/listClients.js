const connection = require('./connection');

module.exports = async () => {
  const conn = await connection();

  const clients = await conn.collection('clients').find({}).toArray();

  return clients;
};