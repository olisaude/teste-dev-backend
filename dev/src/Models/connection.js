const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const { DB_NAME } = process.env;
const MONGO_DB_URL = `mongodb://${process.env.URL || 'mongodb'}:27017/OLI_SAUDE`;

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) =>{
    db = conn.db(DB_NAME);
    return db;
    }));

module.exports = connection;
