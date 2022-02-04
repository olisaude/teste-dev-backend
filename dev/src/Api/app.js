const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {error} = require('../Middlewares/error');
const {addClientController} = require('../Controllers/AddClientControl');
const {findClientControllers} = require('../Controllers/FindClientControl');

app.use(bodyParser.json());

app.post('/clients/add', addClientController);

app.get('/clients/:id', findClientControllers);

app.use(error);

module.exports = app;
