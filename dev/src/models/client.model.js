const { ObjectId } = require('mongodb');
const connect = require('./connection');

const DB_COLLECTION = 'clients';

const create = async ({
  name, gender, healthProblems, birthDate, creationDate, score,
}) => {
  const db = await connect();
  const { insertedId } = await db.collection(DB_COLLECTION)
    .insertOne({
      name, birthDate, gender, healthProblems, creationDate, score: Number(score),
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

const getAllClients = async () => {
  const db = await connect();
  const clients = await db.collection(DB_COLLECTION).find().toArray();
  return clients;
};

const update = async ({
  name, gender, healthProblems, birthDate, updateDate, score,
}) => {
  const db = await connect();
  await db.collection(DB_COLLECTION)
    .updateOne({ name, birthDate }, {
      $set: {
        gender, healthProblems, updateDate, score: Number(score),
      },
    });
  const client = await getClientByNameAndBirthDate(name, birthDate);
  return client;
};

const getTenHighScores = async () => {
  const db = await connect();
  const clients = await db.collection(DB_COLLECTION)
    .find().sort({ score: -1 }, { name: 1 }).limit(10)
    .toArray();
  return clients;
};

module.exports = {
  create,
  getClientById,
  getClientByNameAndBirthDate,
  getAllClients,
  update,
  getTenHighScores,
};
