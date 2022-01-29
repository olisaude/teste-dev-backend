const { ObjectId } = require('mongodb');
const connect = require('./connection');

const DB_COLLECTION = 'clients';

const create = async (name, gender, healthProblems, birthDate, creationDate) => {
  const db = await connect();
  const { insertedId } = await db.collection(DB_COLLECTION)
    .insertOne({
      name, birthDate, gender, healthProblems, creationDate,
    });
  return insertedId;
};

const getClientById = async (id) => {
  const db = await connect();
  const client = await db.collection(DB_COLLECTION)
    .findOne({ _id: ObjectId(id) });
  return client;
};

const getClientByNameAndBirthDate = async (name, birthDate) => {
  const db = await connect();
  const client = await db.collection(DB_COLLECTION)
    .findOne({ name, birthDate });
  return client;
};

module.exports = {
  create,
  getClientById,
  getClientByNameAndBirthDate,
};
