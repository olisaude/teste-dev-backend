const connect = require('./connection');

const listClients = async () => {
  const db = await connect();
  return await db.collection('clients').find().toArray();
};

module.exports = {
  listClients,
};
