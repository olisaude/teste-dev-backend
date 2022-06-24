const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('../middlewares/errorMiddleware');
const route = require('../routes');

const app = express();
app.use(bodyParser.json());

app.use(route);

app.use(errorMiddleware);
module.exports = app;
