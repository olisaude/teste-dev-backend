const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {error} = require('../Middlewares/error');
const {addClientController} = require('../Controllers/AddClientControl');

app.use(bodyParser.json());

app.post('/clients/add', addClientController);

app.use(error);

module.exports = app;
