const connect = require('./connection');

const findClient = async (id) => {
  const db = await connect();
  return await db.collection('clients').findOne(id);
};

module.exports = {findClient};
