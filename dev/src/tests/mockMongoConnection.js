const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DBSERVER = new MongoMemoryServer();

const getConnection = async () => {
  const URLMock = await DBSERVER.getUri();
  const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return MongoClient.connect(URLMock, OPTIONS);
};

module.exports = { getConnection };