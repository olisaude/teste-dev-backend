const { Router } = require('express');
const createClientController = require('../controllers/createClientController');
const listClientByIdController = require("../controllers/listClientByIdController");
const listClientsController = require("../controllers/listClientsController");

const route = Router();

route.post('/clients', createClientController);
route.get('/clients/:id', listClientByIdController);
route.get('/clients', listClientsController);

module.exports = route;