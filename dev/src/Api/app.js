const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {error} = require('../Middlewares/error');
const {addClientController} = require('../Controllers/AddClientControl');
const {findClientControllers} = require('../Controllers/FindClientControl');
const {listClientsController} = require('../Controllers/ListClientsControl');
const {updateClientController} = require('../Controllers/UpdateClientControl');
const {healthRiskController} = require('../Controllers/HealthRiskControl');

app.use(bodyParser.json());

app.post('/clients/add', addClientController);

app.get('/clients/healthrisk', healthRiskController);

app.get('/clients/:id', findClientControllers);

app.get('/clients', listClientsController);

app.put('/clients/:id', updateClientController);

app.use(error);

module.exports = app;
