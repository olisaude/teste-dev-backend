const connect = require('./connection');

const addClient = async (client) => {
  const db = await connect();
  const {insertedId} = await db.collection('clients').insertOne({...client,
    creationDate: new Date()});
  return {insertedId, ...client, creationDate: new Date()};
};
module.exports = {addClient};
