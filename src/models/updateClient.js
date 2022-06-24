const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, update) => {
  try {
    const conn = await connection();
    await conn
      .collection('clients')
      .updateOne({ _id: ObjectId(id) }, { $set: update });
    return { _id: id, ...update };
  } catch (error) {
    return false;
  }
};
