const app = express();
const bodyParser = require('body-parser');
const { error } = require('./Middlewares/error');

app.use(bodyParser.json());


app.use(error);

module.exports = app;