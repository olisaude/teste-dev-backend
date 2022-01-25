const connection = require('./connection');
const { ObjectId } = require('mongodb');

module.exports = async (id) => {
  try {
    const conn = await connection();

    const client = await conn.collection('clients').findOne({ _id: ObjectId(id) });

    return client;
  } catch (error) {
    return false;
  }
};
