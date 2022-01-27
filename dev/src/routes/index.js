const { Router } = require('express');
const createClientController = require('../controllers/createClientController');
const getCriticalClientsController = require('../controllers/getCriticalClientsController');
const listClientByIdController = require('../controllers/listClientByIdController');
const listClientsController = require('../controllers/listClientsController');
const updateClientController = require('../controllers/updateClientController');

const route = Router();

route.post('/clients', createClientController);

route.get('/clients', listClientsController);

route.get('/clients/critical', getCriticalClientsController);

route.get('/clients/:id', listClientByIdController);

route.put('/clients/:id', updateClientController);

module.exports = route;