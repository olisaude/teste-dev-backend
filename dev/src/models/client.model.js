const connect = require('./connection');

const DB_COLLECTION = 'Clients';

const create = async (name, birth_date, gender, health_problems, creation_date) => {
  const db = await connect();
  const { insertedId } = await db.collection(DB_COLLECTION)
    .insertOne({ name, birth_date, gender, health_problems, creation_date });
  return insertedId;
};

module.exports = {
  create,
};