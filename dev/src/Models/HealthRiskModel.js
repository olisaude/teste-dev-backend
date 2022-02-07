const connect = require('./connection');

const creatScore = async (id, score) => {
  const db = await connect();
  return await db.collection('clients').updateOne(
      {_id: id},
      {$set: {score}},
  );
};

const healthRisk = async () => {
  const db = await connect();
  return await db.collection('clients').find(
  ).sort({score: -1}).limit(10).toArray();
};

module.exports = {
  creatScore,
  healthRisk,
};
