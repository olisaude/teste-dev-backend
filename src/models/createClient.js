const connection = require('./connection');

module.exports = async (client) => {
  const conn = await connection();
  
  await conn.collection('clients').insertOne(client);
  
  return { ...client };
};
