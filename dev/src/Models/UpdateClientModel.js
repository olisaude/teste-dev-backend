const connect = require('./connection');

const updateClient = async (id, editClient) => {
  const db = await connect();
  return await db.collection('clients').updateOne(
      {_id: id},
      {$set:
    {...editClient, update: new Date()}},
  );
};

module.exports = {
  updateClient,
};
